import React from "react";
import orderBy from "lodash.orderby";
import { formatDate } from "../../utils";
import "./styles.scss";

const Table = props => {
  const { data, currentPage, pageLength, maxPage, sortType, sortBy } = props;
  const sortedData = orderBy(data, [sortBy], [sortType]);
  let startIndex = (currentPage - 1) * pageLength;
  let endIndex = currentPage * pageLength;
  const showing = sortedData.slice(startIndex, endIndex);

  const attachHeaderClickEvent = columnName => () => {
    if (sortBy === columnName && sortType === "asc") {
      props.sortDescending(sortBy);
    } else if (sortBy === columnName && sortType === "desc") {
      props.sortAscending(sortBy);
    } else {
      props.sortAscending(columnName);
    }
  };

  const onSearchBoxChange = event => {
    props.search(event.target.value.trim());
  };

  return (
    <React.Fragment>
      <table>
        <caption>
          Pro Players List
          <div className="search-box">
            <input
              type="search"
              placeholder="Search.."
              onChange={onSearchBoxChange}
            />
          </div>
        </caption>
        <thead>
          <tr>
            <th onClick={attachHeaderClickEvent("name")}>Name</th>
            <th onClick={attachHeaderClickEvent("team_name")}>Team</th>
            <th onClick={attachHeaderClickEvent("fantasy_role")}>Role</th>
            <th onClick={attachHeaderClickEvent("country_code")}>Country</th>
            <th onClick={attachHeaderClickEvent("last_match_time")}>
              Last Match Time
            </th>
          </tr>
        </thead>
        <tbody>
          {showing &&
            showing.map(player => {
              const {
                account_id,
                avatar,
                team_name,
                fantasy_role,
                country_code,
                last_match_time,
                name
              } = player;
              return (
                <tr key={account_id}>
                  <td>
                    <img src={avatar} alt={`${name} avatar`} />
                    {name}
                  </td>
                  <td>{team_name}</td>
                  <td>{fantasy_role}</td>
                  <td>{country_code}</td>
                  <td>{formatDate(last_match_time)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={props.loadPrevious}>Previous</button>
        <span>
          Page {currentPage} of {maxPage}
        </span>
        <button onClick={props.loadNext}>Next</button>
      </div>
    </React.Fragment>
  );
};

export default Table;
