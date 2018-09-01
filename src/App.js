import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import * as styles from "./styles";
import { addSong } from "./store/songs/songsActions";
import { connect } from "react-redux";
import Songpool from "./components/Pages/Songpool/Songpool";
import Layout from "./components/Pages/Layout/Layout";

class App extends Component {
  render() {
    // const { songs, addSong } = this.props;
    // console.log(songs);
    // return (
    //   <div className="App">
    //     { songs ? songs.map(song => {
    //       return song.name;
    //     }) : null}
    //     <button onClick={addSong} >NEUE SONG </button>
    //   </div>
    // );
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/songs/" component={Songpool} />
          </Switch>
        </Layout>
      </BrowserRouter>
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
