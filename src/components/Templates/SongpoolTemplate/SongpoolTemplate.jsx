import React from "react";
import SongTable from "../../Molecules/SongTable/SongTable";
import FAB from "../../Atoms/FAB/FAB";
import AddSongDialog from "../../Organisms/AddSongDialog/AddSongDialog";

export class SongpoolTemplate extends React.Component {
  state = { modal: false };

  addSong = song => {
    this.setState({modal:false});
    song && this.props.addSong(song);
  }

  render() {
    return (
      <div>
        <AddSongDialog open={this.state.modal} onClose={this.addSong} />
        <FAB onClick={() => this.setState({modal: true})} />
        <SongTable data={this.props.data} />
      </div>
    );
  }
}
