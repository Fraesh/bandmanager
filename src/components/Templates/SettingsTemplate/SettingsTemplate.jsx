import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { CirclePicker } from "react-color";
import { Checkbox } from "@material-ui/core";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: 600,
    marginBottom: theme.spacing.unit * 3
  }
});

class SettingsTemplate extends React.Component {
  state = { singer: false };
  constructor(props) {
    super(props);
    this.state = {
      singer: props.user.singer || false
    };
  }

  handleCheckbox = checked => {
    this.setState({ singer: checked });
    this.props.changeSinger(checked);
  };
  render() {
    const { classes, user, changeColor } = this.props;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Typography variant="headline" gutterBottom>
            Settings
          </Typography>
        </div>
        <div className={classes.container}>
          <Typography gutterBottom>Username</Typography>
          <Typography gutterBottom>{user.displayName}</Typography>
        </div>
        <div className={classes.container}>
          <Typography gutterBottom>E-Mail</Typography>
          <Typography gutterBottom>{user.email}</Typography>
        </div>
        <div className={classes.container}>
          <Typography gutterBottom>Do you sing in your Band?</Typography>
          <Checkbox
            checked={this.state.singer}
            onChange={e => this.handleCheckbox(e.target.checked)}
            value="singer"
          />
        </div>
        <div className={classes.container}>
          <Typography gutterBottom>Pick a Color for your Avatar</Typography>
          <CirclePicker color={user.color} onChangeComplete={changeColor} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SettingsTemplate);
