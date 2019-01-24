import appReducer from "../reducers";
import { loadPlayers, playersLoaded, playersLoadingError } from "../actions";

describe("appReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      players: []
    };
  });

  it("should return the initial state", () => {
    const expected = state;
    expect(appReducer(undefined, {})).toEqual(expected);
  });

  it("should handle the loadPlayers action correctly", () => {
    const expected = {
      ...state,
      loading: true
    };
    expect(appReducer(state, loadPlayers())).toEqual(expected);
  });

  it("should handle the playersLoaded action correctly", () => {
    const playersData = [{ name: "Test 1", team: "Team 1" }];
    const expected = {
      ...state,
      players: playersData
    };
    expect(appReducer(state, playersLoaded(playersData))).toEqual(expected);
  });

  it("should handle the playersLoadingError action correctly", () => {
    const error = { msg: "There is an error" };
    const expected = {
      ...state,
      error
    };
    expect(appReducer(state, playersLoadingError(error))).toEqual(expected);
  });
});
