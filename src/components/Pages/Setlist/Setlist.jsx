import React from "react";
import SetlistScreenTemplate from "../../Templates/SetlistScreenTemplate/SetlistScreenTemplate";
import { addSet } from "../../../store/setlists/setlistsActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  syncSetlist,
  moveSong,
  deleteSet
} from "./../../../store/setlist/setlistActions";
class Setlist extends React.Component {
  componentDidMount() {
    this.props.syncSetlist(this.props.match.params.setlistId);
  }
  render() {
    const { songs, setlist, addSet, match, moveSong, deleteSet } = this.props;
    return (
      <SetlistScreenTemplate
        songs={songs}
        setlist={setlist}
        addSet={() => addSet(match.params.setlistId)}
        moveSong={moveSong}
        onDelete={deleteSet}
      />
    );
  }
}

const mapStateToProps = state => ({
  songs: state.songs,
  setlist: state.setlist
});
const mapDispatchToProps = {
  addSet,
  syncSetlist,
  moveSong,
  deleteSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Setlist));
