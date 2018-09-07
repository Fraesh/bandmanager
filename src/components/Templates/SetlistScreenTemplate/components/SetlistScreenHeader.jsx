import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    margin: theme.spacing.unit,
    display: "flex",
    justifyContent: "space-between"
  }
});

const SetlistScreenHeader = props => {
  const { classes, name } = props;
  return (
    <div className={classes.container}>
      <Typography variant="headline" gutterBottom>
        {name}
      </Typography>
      <div>
        <Button color="primary" className={classes.button}>
          Print PDF
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(SetlistScreenHeader);
