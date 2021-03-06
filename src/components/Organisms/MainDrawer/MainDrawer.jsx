import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import { MainItems } from "./Items";

const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    zIndex:1,                      
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

const MainDrawer = props => {
  const { classes, theme } = props;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <MainItems close={props.onClose} />
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.open}
          onClose={props.onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(MainDrawer);
