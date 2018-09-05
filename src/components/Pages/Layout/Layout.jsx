import React from "react";
import MainAppBar from "../../Organisms/MainAppBar/MainAppBar";
import MainDrawer from "../../Organisms/MainDrawer/MainDrawer";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    marginTop: theme.spacing.unit * 10,
    flexGrow: 1,
    padding: theme.spacing.unit *2,
    width:'100%',
    overflowX:'auto'
  }
});
class Layout extends React.Component {
  state = { open: false };

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <MainDrawer
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        />
        <MainAppBar
          title="BandManager"
          toggleDrawer={() => this.setState({ open: !this.state.open })}
        />
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
