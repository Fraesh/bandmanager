import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  button: {
    position: 'fixed',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3
  }
});

const FAB = props => {
    const { classes } = props;
  return (
    <Button
      variant="fab"
      color="primary"
      aria-label="Add"
      className={classes.button}
      onClick={props.onClick}
    >
      <AddIcon />
    </Button>
  );
};

export default withStyles(styles)(FAB);
