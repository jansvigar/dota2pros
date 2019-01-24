import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Table from "../index";

const samplePlayersData = [
  {
    account_id: 88470,
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1e/1ebd57e6f505eb7fc09e943a09a6e79fffabbbd2.jpg",
    loccountrycode: "China",
    last_match_time: "1/18/2019 06:18",
    name: "TZY",
    fantasy_role: "Core",
    team_name: ""
  },
  {
    account_id: 1296625,
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/95/951e9165740fda890651d8475fc50f5368a847bb.jpg",
    loccountrycode: "United States",
    last_match_time: "1/20/2019 17:08",
    name: "Newsham",
    fantasy_role: "Support",
    team_name: "TEAM TEAM"
  }
];

const renderTableWithSampleData = () => {
  return render(
    <Table
      data={samplePlayersData}
      currentPage={1}
      pageLength={10}
      sortType={"asc"}
      sortBy={"team_name"}
    />
  );
};

afterEach(cleanup);

describe("<Table />", () => {
  it("should render no data available message if no items are passed", async () => {
    const { getByText } = render(<Table />);
    expect(getByText(/No data available/i)).toBeDefined();
  });

  it("should render all items passed to the component", () => {
    const { container } = renderTableWithSampleData();
    const tableRows = container.querySelectorAll("tbody tr");
    expect(tableRows).toHaveLength(2);

    const firstRow = tableRows[0];
    const firstRowColumns = firstRow.querySelectorAll("td");
    expect(firstRowColumns[0].querySelector("img")).toHaveAttribute(
      "src",
      samplePlayersData[0].avatar
    );
    expect(firstRowColumns[0]).toHaveTextContent(samplePlayersData[0].name);
    expect(firstRowColumns[1]).toHaveTextContent(
      samplePlayersData[0].team_name
    );
    expect(firstRowColumns[2]).toHaveTextContent(
      samplePlayersData[0].fantasy_role
    );
    expect(firstRowColumns[3]).toHaveTextContent(
      samplePlayersData[0].loccountrycode
    );
    expect(firstRowColumns[4]).toHaveTextContent(
      samplePlayersData[0].last_match_time
    );

    const secondRow = tableRows[1];
    const secondRowColumns = secondRow.querySelectorAll("td");
    expect(secondRowColumns[0].querySelector("img")).toHaveAttribute(
      "src",
      samplePlayersData[1].avatar
    );
    expect(secondRowColumns[0]).toHaveTextContent(samplePlayersData[1].name);
    expect(secondRowColumns[1]).toHaveTextContent(
      samplePlayersData[1].team_name
    );
    expect(secondRowColumns[2]).toHaveTextContent(
      samplePlayersData[1].fantasy_role
    );
    expect(secondRowColumns[3]).toHaveTextContent(
      samplePlayersData[1].loccountrycode
    );
    expect(secondRowColumns[4]).toHaveTextContent(
      samplePlayersData[1].last_match_time
    );
  });
});

it("should render table headers correctly", () => {
  const { container } = renderTableWithSampleData();
  const tableHeaderRow = container.querySelector("thead tr");
  const tableHeaders = tableHeaderRow.querySelectorAll("th");
  expect(tableHeaders[0]).toHaveTextContent("Name");
  expect(tableHeaders[1]).toHaveTextContent("Team");
  expect(tableHeaders[2]).toHaveTextContent("Role");
  expect(tableHeaders[3]).toHaveTextContent("Country");
  expect(tableHeaders[4]).toHaveTextContent("Last Match Time");
});

it("should render correct paginations", () => {
  const { getByText } = renderTableWithSampleData();
  expect(getByText(/^page [0-9]+ of [0-9]+$/gi)).toHaveTextContent(
    "Page 1 of 1"
  );
});

it("should render search box", () => {
  const { getByPlaceholderText } = render(<Table />);
  expect(getByPlaceholderText(/Search/i)).toBeDefined();
});

it("should render next and previous buttons", () => {
  const { getByText } = render(<Table />);
  expect(getByText(/Next/i)).toBeDefined();
  expect(getByText(/Previous/i)).toBeDefined();
});
