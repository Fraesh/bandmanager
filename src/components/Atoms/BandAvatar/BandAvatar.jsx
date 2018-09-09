import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";

const styles = theme => ({
  small: {
    height: "2rem",
    width: "2rem",
    minWidth: "2rem",
    display: "inline-flex"
  }
});

const BandAvatar = props => {
  const { users, userId, classes, small, className, style } = props;
  const user = users.find(u => u.id === userId);

  let joinedClasses = [];
  small && joinedClasses.push(classes.small);
  className && joinedClasses.push(className);

  return (
    <Avatar
      style={{ backgroundColor: user.color, ...style }}
      className={joinedClasses.join(" ")}
    >
      {user.displayName[0]}
    </Avatar>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles, { withTheme: true })(BandAvatar));
