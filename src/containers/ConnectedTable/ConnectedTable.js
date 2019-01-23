import React, { Component } from "react";
import { connect } from "react-redux";
import pick from "lodash.pick";
import Table from "../../components/Table";
import {
  initializeTable,
  loadNext,
  loadPrevious,
  sortAscending,
  sortDescending,
  search
} from "./actions";
import { searchArray } from "../../utils";

class ConnectedTable extends Component {
  componentDidMount() {
    const pickedPlayersData = this.props.players.map(player =>
      pick(player, [
        "name",
        "team_name",
        "fantasy_role",
        "country_code",
        "last_match_time",
        "avatar",
        "account_id"
      ])
    );
    this.props.initializeTable(pickedPlayersData);
  }
  render() {
    return <Table {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.table.searchKeyword
      ? searchArray(state.table.data, state.table.searchKeyword)
      : state.table.data,
    currentPage: state.table.currentPage,
    pageLength: state.table.pageLength,
    sortType: state.table.sortType,
    sortBy: state.table.sortBy
  };
};

export default connect(
  mapStateToProps,
  {
    initializeTable,
    loadNext,
    loadPrevious,
    sortAscending,
    sortDescending,
    search
  }
)(ConnectedTable);
