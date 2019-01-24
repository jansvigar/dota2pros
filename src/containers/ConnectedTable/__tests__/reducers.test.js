import orderBy from "lodash.orderby";
import connectedTableReducer from "../reducers";
import {
  initializeTable,
  loadNext,
  loadPrevious,
  sortAscending,
  sortDescending,
  search
} from "../actions";

describe("connectedTableReducer", () => {
  let state, sampleData, maxPage, columnName, keyword;
  beforeEach(() => {
    state = {
      data: [],
      currentPage: 1,
      pageLength: 5,
      sortType: "asc",
      sortBy: "team_name",
      searchKeyword: ""
    };
    sampleData = [
      { name: "Test 1", team_name: "Team 1" },
      { name: "Test 5", team_name: "Team 10" },
      { name: "Test 2", team_name: "Team 2" }
    ];
    maxPage = 50;
    columnName = "name";
    keyword = "United States";
  });

  it("should return the initial state", () => {
    const expected = state;
    expect(connectedTableReducer(undefined, {})).toEqual(expected);
  });

  it("should handle the initializeTable action correctly", () => {
    const expected = {
      ...state,
      data: sampleData
    };
    expect(connectedTableReducer(state, initializeTable(sampleData))).toEqual(
      expected
    );
  });

  it("should handle the loadNext action correctly", () => {
    const expected = {
      ...state,
      currentPage: state.currentPage + 1
    };
    expect(connectedTableReducer(state, loadNext(maxPage))).toEqual(expected);
  });

  it("should handle the loadPrevious action correctly", () => {
    state = { ...state, currentPage: 2 };
    const expected = {
      ...state,
      currentPage: state.currentPage - 1
    };
    expect(connectedTableReducer(state, loadPrevious(maxPage))).toEqual(
      expected
    );
  });

  it("should handle the sortAscending action correctly", () => {
    const sortedSampleData = [
      { name: "Test 1", team_name: "Team 1" },
      { name: "Test 2", team_name: "Team 2" },
      { name: "Test 5", team_name: "Team 10" }
    ];
    const expected = {
      ...state,
      data: sortedSampleData,
      sortBy: columnName,
      sortType: "asc"
    };
    state = { ...state, data: orderBy(sampleData, columnName, ["asc"]) };
    expect(connectedTableReducer(state, sortAscending(columnName))).toEqual(
      expected
    );
  });

  it("should handle the sortDescending action correctly", () => {
    const sortedSampleData = [
      { name: "Test 5", team_name: "Team 10" },
      { name: "Test 2", team_name: "Team 2" },
      { name: "Test 1", team_name: "Team 1" }
    ];
    const expected = {
      ...state,
      data: sortedSampleData,
      sortBy: columnName,
      sortType: "desc"
    };
    state = { ...state, data: orderBy(sampleData, columnName, ["desc"]) };
    expect(connectedTableReducer(state, sortDescending(columnName))).toEqual(
      expected
    );
  });

  it("should handle the search action correctly", () => {
    const expected = {
      ...state,
      searchKeyword: keyword
    };
    expect(connectedTableReducer(state, search(keyword))).toEqual(expected);
  });
});
