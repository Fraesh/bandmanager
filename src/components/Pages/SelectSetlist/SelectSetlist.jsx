import React from "react";
import SelectSetlistScreenTemplate from "../../Templates/SelectSetlistScreenTemplate/SelectSetlistScreenTemplate";
import { addSetlist } from "../../../store/setlists/setlistsActions";
import {connect} from 'react-redux'

const SelectSetlist = props => {
  return (
    <SelectSetlistScreenTemplate
      data={props.setlists || []}
      addSetlist={props.addSetlist}
    />
  );
};

const mapStateToProps = state => ({
  setlists: state.setlists.setlists
});
const mapDispatchToProps = {
  addSetlist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSetlist);
