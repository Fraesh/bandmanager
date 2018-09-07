import React from "react";
import { SetlistToPDFTemplate } from "../../Templates/SetlistToPDFTemplate/SetlistToPDFTemplate";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { syncSetlist } from "./../../../store/setlist/setlistActions";

class SetlistToPDF extends React.Component {
  render() {
    const { syncSetlist, songs, setlist, match } = this.props;

    !setlist && syncSetlist(match.params.setlistId);
    setlist &&
      match.params.setlistId !== setlist.id &&
      syncSetlist(match.params.setlistId);

    return setlist && songs ? (
      <SetlistToPDFTemplate setlist={setlist} songs={songs} />
    ) : (
      <div>Loading</div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.songs,
  setlist: state.setlist
});
const mapDispatchToProps = {
  syncSetlist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SetlistToPDF));
