import React from "react";
import { formatDate } from "../../utils";
import "./styles.scss";

const Table = props => {
  const { data, currentPage, pageLength, sortType, sortBy } = props;
  const maxPage =
    data && data.length > 0 ? Math.ceil(data.length / pageLength, 0) : 1;

  let startIndex = (currentPage - 1) * pageLength;
  let endIndex = currentPage * pageLength;
  const showing =
    data && data.length > 0 ? data.slice(startIndex, endIndex) : [];

  const onTableHeaderClick = columnName => () => {
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

  const onNextClick = event => {
    props.loadNext(maxPage);
  };

  const onPreviousClick = event => {
    props.loadPrevious(maxPage);
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
            <th onClick={onTableHeaderClick("name")}>Name</th>
            <th onClick={onTableHeaderClick("team_name")}>Team</th>
            <th onClick={onTableHeaderClick("fantasy_role")}>Role</th>
            <th onClick={onTableHeaderClick("loccountrycode")}>Country</th>
            <th onClick={onTableHeaderClick("last_match_time")}>
              Last Match Time
            </th>
          </tr>
        </thead>
        <tbody>
          {showing.length > 0 ? (
            showing.map(player => {
              const {
                account_id,
                avatar,
                team_name,
                fantasy_role,
                loccountrycode,
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
                  <td>{loccountrycode}</td>
                  <td>{formatDate(last_match_time)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" data-testid="">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={onPreviousClick}>Previous</button>
        <span>
          Page {currentPage} of {maxPage}
        </span>
        <button onClick={onNextClick}>Next</button>
      </div>
    </React.Fragment>
  );
};

export default Table;
