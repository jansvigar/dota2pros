import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS,
  TABLE_SORT_ASC,
  TABLE_SORT_DESC
} from "./constants";

const initialState = {
  currentPage: 1,
  pageLength: 5,
  maxPage: 1,
  sortType: "asc",
  sortBy: "team_name"
};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TABLE:
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
    case TABLE_SORT_ASC:
      return {
        ...state,
        sortType: action.sortType,
        sortBy: action.sortBy
      };
    case TABLE_SORT_DESC:
      return {
        ...state,
        sortType: action.sortType,
        sortBy: action.sortBy
      };
    default:
      return state;
  }
}

export default tableReducer;
