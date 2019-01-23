import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR
} from "./constants";
import { getPlayerRole, getPlayerCountry } from "../../utils";

export function loadPlayers() {
  return {
    type: LOAD_PLAYERS
  };
}

export function playersLoaded(players) {
  return {
    type: LOAD_PLAYERS_SUCCESS,
    players
  };
}

export function playersLoadingError(error) {
  return {
    type: LOAD_PLAYERS_ERROR,
    error
  };
}

export function getPlayers() {
  return async dispatch => {
    const API_URL = "https://api.opendota.com/api/proPlayers";
    dispatch(loadPlayers());
    try {
      let response = await fetch(API_URL);
      if (response.status === 200) {
        let players = await response.json();

        let formattedPlayers = players.map(player => {
          return {
            ...player,
            fantasy_role: getPlayerRole(player.fantasy_role),
            country_code: getPlayerCountry(player.country_code)
          };
        });

        dispatch(playersLoaded(formattedPlayers));
      }
    } catch (err) {
      dispatch(playersLoadingError(err));
    }
  };
}
