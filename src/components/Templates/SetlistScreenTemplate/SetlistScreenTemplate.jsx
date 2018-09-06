import React from "react";
import Setlist from "../../Organisms/Setlist/Setlist";
import FAB from "../../Atoms/FAB/FAB";

const SetlistScreenTemplate = props => {
  return (
    <React.Fragment>
      <FAB onClick={props.addSet} />
      <Setlist
        songs={props.songs}
        setlist={props.setlist}
        moveSong={props.moveSong}
      />
    </React.Fragment>
  );
};

export default SetlistScreenTemplate;
