import React from "react";
import SetlistScreenTemplate from "../../Templates/SetlistScreenTemplate/SetlistScreenTemplate";
import { addSet } from "../../../store/setlists/setlistsActions";
import { connect } from "react-redux";
import {withRouter} from 'react-router'

const Setlist = props => {
  const { songs, setlists, addSet, match } = props;
  console.log(setlists)
  return (
  
      <SetlistScreenTemplate
        songs={songs}
        setlist={setlists.find(setlist => setlist.id ===match.params.setlistId)}
        addSet={()=>addSet(match.params.setlistId)}
      />
 
  );
};

const mapStateToProps = state => ({
  songs: state.songs,
  setlists: state.setlists,
});
const mapDispatchToProps = {
  addSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Setlist));
