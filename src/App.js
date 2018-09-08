import React, { Component } from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import { addSong } from "./store/songs/songsActions";
import { connect } from "react-redux";
import Songpool from "./components/Pages/Songpool/Songpool";
import SelectSetlist from "./components/Pages/SelectSetlist/SelectSetlist";
import Setlist from "./components/Pages/Setlist/Setlist";
import Layout from "./components/Pages/Layout/Layout";
import history from "./store/history";
import AuthRoute from "./components/Molecules/AuthRoute/AuthRoute";
import SetlistToPDF from "./components/Pages/SetlistToPDF/SetlistToPDF";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <AuthRoute exact path="/songs/" component={Songpool} />
            <AuthRoute exact path="/" component={Dashboard} />
            <AuthRoute exact path="/setlist/" component={SelectSetlist} />
            <AuthRoute exact path="/setlist/:setlistId/" component={Setlist} />
            <AuthRoute
              exact
              path="/setlist/:setlistId/pdf"
              component={SetlistToPDF}
            />
            {/* <Route exact path="/" component={Setlist} /> */}
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.songs.songs
});
const mapDispatchToProps = {
  addSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
