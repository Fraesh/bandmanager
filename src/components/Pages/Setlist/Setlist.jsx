import React from "react";
import SetlistScreenTemplate from "../../Templates/SetlistScreenTemplate/SetlistScreenTemplate";
import { addSong } from "../../../store/songs/songsActions";
import { connect } from "react-redux";

const Songpool = props => {
  const { songs, addSong } = props;
  console.log(songs);
  return (
    <div>
      <SetlistScreenTemplate
        songs={songs}
        setlist={null}
        addSong={addSong}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  songs: state.songs.songs
});
const mapDispatchToProps = {
  addSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songpool);
