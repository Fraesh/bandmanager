import React from "react";
import { SongpoolTemplate } from "../../Templates/SongpoolTemplate/SongpoolTemplate";
import { addSong } from "../../../store/songs/songsActions";
import { connect } from "react-redux";
import { updateSong } from "./../../../store/songs/songsActions";

const Songpool = props => {
  const { songs, addSong, updateSong } = props;
  return (
    <div>
      <SongpoolTemplate
        data={songs || []}
        addSong={addSong}
        editSong={updateSong}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  songs: state.songs
});
const mapDispatchToProps = {
  addSong,
  updateSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songpool);
