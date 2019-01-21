import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
} from '../actions/constants';

const initialState = {
  loading: false,
  error: false,
  players: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYERS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOAD_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        players: action.players,
      };
    case LOAD_PLAYERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default appReducer;
