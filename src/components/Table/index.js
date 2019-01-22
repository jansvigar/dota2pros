import React from "react";
import { formatDate, getPlayerRole, getPlayerCountry } from "../../utils";
import "./styles.scss";

const Table = props => {
  const { data, currentPage, pageLength, maxPage } = props;
  let startIndex = (currentPage - 1) * pageLength;
  let endIndex = currentPage * pageLength;
  const showing = data.slice(startIndex, endIndex);
  return (
    <React.Fragment>
      <table>
        <caption>Pro Players List</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">Role</th>
            <th scope="col">Country</th>
            <th scope="col">Last Match Time</th>
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
                  <td>{getPlayerRole(fantasy_role)}</td>
                  <td>{getPlayerCountry(country_code)}</td>
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
