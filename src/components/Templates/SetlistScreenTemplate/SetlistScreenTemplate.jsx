import React from "react";
import Setlist from "../../Organisms/Setlist/Setlist";
import FAB from "../../Atoms/FAB/FAB";
import SetlistScreenHeader from "./components/SetlistScreenHeader";

const SetlistScreenTemplate = props => {
  return (
    <React.Fragment>
      <SetlistScreenHeader name={(props.setlist || {}).name} />

      <FAB onClick={props.addSet} />
      <Setlist
        songs={props.songs}
        setlist={props.setlist}
        moveSong={props.moveSong}
        onDelete={props.onDelete}
      />
    </React.Fragment>
  );
};

export default SetlistScreenTemplate;
