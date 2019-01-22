import React from "react";
import { formatDate } from "../../utils";
import "./styles.module.scss";

const Table = props => {
  return (
    <table>
      <caption>Pro Players List</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Team</th>
          <th scope="col">Role</th>
          <th scope="col">Country</th>
          <th scope="col">Last Match Time</th>
          <th scope="col">Last Login</th>
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map(player => {
            const {
              account_id,
              avatar,
              personaname,
              team_name,
              fantasy_role,
              country_code,
              last_match_time,
              last_login,
              name
            } = player;
            return (
              <tr key={account_id}>
                <td>
                  <img src={avatar} alt={`${name} avatar`} />
                  {personaname}
                </td>
                <td>{team_name}</td>
                <td>{fantasy_role}</td>
                <td>{country_code}</td>
                <td>{formatDate(last_match_time)}</td>
                <td>{formatDate(last_login)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
