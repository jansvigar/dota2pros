import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS
} from "./constants";

const initialState = {
  currentPage: 1,
  pageLength: 5,
  maxPage: 1
};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TABLE:
      console.log(action.maxPage);
      return {
        ...state,
        maxPage: action.maxPage
      };
    case TABLE_LOAD_NEXT:
      return {
        ...state,
        currentPage:
          state.currentPage + 1 > state.maxPage
            ? state.currentPage
            : state.currentPage + 1
      };
    case TABLE_LOAD_PREVIOUS:
      return {
        ...state,
        currentPage: state.currentPage - 1 < 1 ? 1 : state.currentPage - 1
      };
    default:
      return state;
  }
}

export default tableReducer;
