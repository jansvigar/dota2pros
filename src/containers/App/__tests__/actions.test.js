import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR
} from "../constants";

import {
  loadPlayers,
  playersLoaded,
  playersLoadingError,
  getPlayers
} from "../actions";

import { getPlayerCountry, getPlayerRole } from "../../../utils";

const samplePlayersData = [
  {
    account_id: 88470,
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1e/1ebd57e6f505eb7fc09e943a09a6e79fffabbbd2.jpg",
    loccountrycode: "CN",
    last_match_time: "1/18/2019 06:18",
    name: "TZY",
    fantasy_role: 1,
    team_name: ""
  }
];

const fetchError = {
  msg: "There is an error"
};

const mockFetch = jest
  .fn()
  .mockImplementationOnce(() => {
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => samplePlayersData
    });
  })
  .mockImplementationOnce(() => {
    return Promise.reject({
      msg: fetchError.msg
    });
  });

describe("App Actions", () => {
  describe("loadPlayers", () => {
    it("should return the correct type", () => {
      const expected = { type: LOAD_PLAYERS };
      expect(loadPlayers()).toEqual(expected);
    });
  });

  describe("playersLoaded", () => {
    it("should return the correct type and passed players data", () => {
      const playersData = [
        { name: "Test1", team: "Team1" },
        { name: "Test2", team: "Team2" }
      ];
      const expected = { type: LOAD_PLAYERS_SUCCESS, players: playersData };
      expect(playersLoaded(playersData)).toEqual(expected);
    });
  });

  describe("playersLoadingError", () => {
    it("should return the correct type and the error", () => {
      const error = true;
      const expected = {
        type: LOAD_PLAYERS_ERROR,
        error
      };
      expect(playersLoadingError(error)).toEqual(expected);
    });
  });

  describe("getPlayers", () => {
    afterEach(() => {
      jest.resetModules();
    });

    window.fetch = mockFetch;
    it("should dispatch the playersLoaded action if it fetches the data successfully", async () => {
      const dispatch = jest.fn();
      await getPlayers()(dispatch);
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith({ type: LOAD_PLAYERS });
      expect(dispatch).toBeCalledWith({
        type: LOAD_PLAYERS_SUCCESS,
        players: samplePlayersData.map(player => {
          return {
            ...player,
            loccountrycode: getPlayerCountry(player.loccountrycode),
            fantasy_role: getPlayerRole(player.fantasy_role)
          };
        })
      });
    });

    it("should dispatch the playersLoadingError action if there is an error fetching data", async () => {
      const dispatch = jest.fn();
      await getPlayers()(dispatch);
      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith({ type: LOAD_PLAYERS });
      expect(dispatch).toBeCalledWith({
        type: LOAD_PLAYERS_ERROR,
        error: fetchError
      });
    });
  });
});
