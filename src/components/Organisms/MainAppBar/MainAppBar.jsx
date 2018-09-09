import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { loginRequest, logoutRequest } from "./../../../store/auth/authActions";
import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import BandAvatar from "../../Atoms/BandAvatar/BandAvatar";

const styles = theme => ({
  appBar: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  side: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    width: "2rem",
    height: "2rem",
    margin: ".5rem"
  },
  avatarSection: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing.unit
  }
});

const MainAppBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.side}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={props.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {props.title}
            </Typography>
          </Link>
        </div>
        <div className={classes.side}>
          {props.loggedIn ? (
            <React.Fragment>
              <div className={classes.avatarSection}>
                <BandAvatar userId={props.user.id} />
              </div>
              <Button color="inherit" onClick={props.logoutRequest}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <Button color="inherit" onClick={props.loginRequest}>
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});
const mapDispatchToProps = {
  loginRequest,
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MainAppBar));
