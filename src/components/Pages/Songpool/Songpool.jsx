import React from 'react';
import { SongpoolTemplate } from '../../Templates/SongpoolTemplate/SongpoolTemplate';
import {addSong} from '../../../store/songs/songsActions'
import {connect} from 'react-redux'

const Songpool = props => {
    const { songs, addSong } = props;
    return (
        <div>
        <SongpoolTemplate data={songs || []} addSong={addSong}/>
        </div>
    );
}

const mapStateToProps = state => ({
    songs: state.songs.songs,
  });
  const mapDispatchToProps = {
    addSong
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Songpool);
  