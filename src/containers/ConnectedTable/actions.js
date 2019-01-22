import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS
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
