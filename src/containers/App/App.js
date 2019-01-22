import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlayers } from "./actions";
import ConnectedTable from "../../containers/ConnectedTable";
import LoadingIndicator from "../../components/LoadingIndicator";

class App extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <div className="container">
        <h1>Dota 2 Pros</h1>
        {this.props.loading ? (
          <LoadingIndicator />
        ) : this.props.error ? (
          "Error"
        ) : (
          <ConnectedTable />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.app.players,
    loading: state.app.loading,
    error: state.app.error
  };
};

export default connect(
  mapStateToProps,
  { getPlayers }
)(App);
