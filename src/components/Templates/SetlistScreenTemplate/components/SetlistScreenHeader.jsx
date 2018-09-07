import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
        <Button
          component={Link}
          color="primary"
          to="pdf/"
          className={classes.button}
        >
          Print PDF
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(SetlistScreenHeader);
