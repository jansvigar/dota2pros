import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS,
  TABLE_SORT_ASC,
  TABLE_SORT_DESC,
  TABLE_SEARCH
} from "./constants";

export function initializeTable(data) {
  return {
    type: INITIALIZE_TABLE,
    data
  };
}

export function loadNext(maxPage) {
  return {
    type: TABLE_LOAD_NEXT,
    maxPage
  };
}

export function loadPrevious(maxPage) {
  return {
    type: TABLE_LOAD_PREVIOUS,
    maxPage
  };
}

export function sortAscending(columnName) {
  return {
    type: TABLE_SORT_ASC,
    sortBy: columnName,
    sortType: "asc"
  };
}

export function sortDescending(columnName) {
  return {
    type: TABLE_SORT_DESC,
    sortBy: columnName,
    sortType: "desc"
  };
}

export function search(keyword) {
  return {
    type: TABLE_SEARCH,
    keyword
  };
}
