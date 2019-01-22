import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../../components/Table";
import { initializeTable, loadNext, loadPrevious } from "./actions";

class ConnectedTable extends Component {
  componentDidMount() {
    this.props.initializeTable(
      Math.round(this.props.data.length / this.props.pageLength + 1, 0)
    );
  }
  render() {
    return <Table {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state.app.players,
    currentPage: state.table.currentPage,
    pageLength: state.table.pageLength
  };
};

export default connect(
  mapStateToProps,
  { initializeTable, loadNext, loadPrevious }
)(ConnectedTable);
