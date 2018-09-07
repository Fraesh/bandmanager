import React from "react";
import SongTable from "../../Molecules/SongTable/SongTable";
import FAB from "../../Atoms/FAB/FAB";
import SongDialog from "../../Organisms/SongDialog/SongDialog";
import { secondsToTime } from "../../common/time";

export class SongpoolTemplate extends React.Component {
  state = {
    addSongModal: false,
    editSongModal: false,
    editSong: { singer: [], mkey: "", bpm: NaN, length: "", name: "", id: "" }
  };

  addSong = song => {
    this.setState({ addSongModal: false });
    song && this.props.addSong(song);
  };

  editSong = song => {
    console.log(song);
    this.setState({ editSongModal: false });
    song && this.props.editSong({ ...song, id: this.state.editSong.id });
  };

  loadSong = id => {
    const song = this.props.data.find(song => song.id === id);
    song && this.setState({ editSong: song });
    this.setState({ editSongModal: true });
  };

  render() {
    return (
      <div>
        <SongDialog
          label="Add Song"
          open={this.state.addSongModal}
          onClose={this.addSong}
          singer={[]}
          mkey=""
          bpm={NaN}
          length=""
          songname=""
        />
        <SongDialog
          label="Edit Song"
          open={this.state.editSongModal}
          onClose={this.editSong}
          singer={this.state.editSong.singer}
          mkey="OTTO"
          bpm={this.state.editSong.bpm}
          length={secondsToTime(this.state.editSong.length)}
          songname={this.state.editSong.name}
        />
        <FAB onClick={() => this.setState({ addSongModal: true })} />
        <SongTable
          data={this.props.data}
          onSongClick={id => this.loadSong(id)}
        />
      </div>
    );
  }
}
