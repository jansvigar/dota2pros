import orderBy from "lodash.orderby";
import pick from "lodash.pick";
import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS,
  TABLE_SORT_ASC,
  TABLE_SORT_DESC,
  TABLE_SEARCH
} from "./constants";

const initialState = {
  data: [],
  currentPage: 1,
  pageLength: 5,
  sortType: "asc",
  sortBy: "team_name",
  searchKeyword: ""
};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_TABLE:
      return {
        ...state,
        data: action.data.map(player =>
          pick(player, [
            "name",
            "team_name",
            "fantasy_role",
            "country_code",
            "last_match_time",
            "avatar",
            "account_id"
          ])
        )
      };
    case TABLE_LOAD_NEXT:
      return {
        ...state,
        currentPage:
          state.currentPage + 1 > action.maxPage
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
        data: orderBy(state.data, [action.sortBy], "asc"),
        sortBy: action.sortBy,
        sortType: "asc"
      };
    case TABLE_SORT_DESC:
      return {
        ...state,
        data: orderBy(state.data, [action.sortBy], "desc"),
        sortBy: action.sortBy,
        sortType: "desc"
      };
    case TABLE_SEARCH:
      return {
        ...state,
        searchKeyword: action.keyword,
        currentPage: 1
      };
    default:
      return state;
  }
}

export default tableReducer;
