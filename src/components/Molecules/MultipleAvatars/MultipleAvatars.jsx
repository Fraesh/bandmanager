import React from "react";
import BandAvatar from "../../Atoms/BandAvatar/BandAvatar";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  avatars: {
    width: 60,
    display: "flex",
    justifyContent: "start"
  }
});

const MultipleAvatars = props => {
  const { singer, classes } = props;
  return (
    <div className={classes.avatars}>
      {singer &&
        singer.map((singer, i) => (
          <BandAvatar
            userId={singer}
            small
            style={
              i >= 1
                ? {
                    marginLeft: -singer.length / 1.4,
                    boxShadow: " -3px 0px 2px rgba(0,0,0,.1)"
                  }
                : {}
            }
          />
        ))}
    </div>
  );
};

export default withStyles(styles)(MultipleAvatars);
