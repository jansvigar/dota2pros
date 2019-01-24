import {
  INITIALIZE_TABLE,
  TABLE_LOAD_NEXT,
  TABLE_LOAD_PREVIOUS,
  TABLE_SORT_ASC,
  TABLE_SORT_DESC,
  TABLE_SEARCH
} from "../constants";

import {
  initializeTable,
  loadNext,
  loadPrevious,
  sortAscending,
  sortDescending,
  search
} from "../actions";

const sampleData = [
  { name: "Test 1", team: "Team 1" },
  { name: "Test 2", team: "Team 2" }
];

describe("ConnectedTable Actions", () => {
  describe("initializeTable", () => {
    it("should return the correct type and passed data", () => {
      const expected = { type: INITIALIZE_TABLE, data: sampleData };
      expect(initializeTable(sampleData)).toEqual(expected);
    });
  });

  describe("loadNext", () => {
    it("should return the correct type and passed maxPage value", () => {
      const expected = { type: TABLE_LOAD_NEXT, maxPage: 50 };
      expect(loadNext(50)).toEqual(expected);
    });
  });

  describe("loadPrevious", () => {
    it("should return the correct type and passed maxPage value", () => {
      const expected = { type: TABLE_LOAD_PREVIOUS, maxPage: 50 };
      expect(loadPrevious(50)).toEqual(expected);
    });
  });

  describe("sortAscending", () => {
    it("should return the correct type and passed sortType and sortBy values", () => {
      const expected = {
        type: TABLE_SORT_ASC,
        sortBy: "name",
        sortType: "asc"
      };
      expect(sortAscending("name")).toEqual(expected);
    });
  });

  describe("sortDescending", () => {
    it("should return the correct type and passed sortType and sortBy values", () => {
      const expected = {
        type: TABLE_SORT_DESC,
        sortBy: "name",
        sortType: "desc"
      };
      expect(sortDescending("name")).toEqual(expected);
    });
  });

  describe("search", () => {
    it("should return the correct type and passed keyword", () => {
      const expected = {
        type: TABLE_SEARCH,
        keyword: "United States"
      };
      expect(search("United States")).toEqual(expected);
    });
  });
});
