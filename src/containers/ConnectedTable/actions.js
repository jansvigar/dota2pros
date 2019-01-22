import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS,
  TABLE_SORT_ASC,
  TABLE_SORT_DESC
} from "./constants";

export function initializeTable(maxPage) {
  return {
    type: INITIALIZE_TABLE,
    maxPage
  };
}

export function loadNext() {
  return {
    type: TABLE_LOAD_NEXT
  };
}

export function loadPrevious() {
  return {
    type: TABLE_LOAD_PREVIOUS
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
