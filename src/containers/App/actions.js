import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR
} from "./constants";

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
        dispatch(playersLoaded(players));
      }
    } catch (err) {
      dispatch(playersLoadingError(err));
    }
  };
}
