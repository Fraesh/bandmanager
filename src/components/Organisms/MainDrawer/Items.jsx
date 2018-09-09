import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StraightenIcon from "@material-ui/icons/Straighten";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

export const MainItems = props => {
  return (
    <div>
      <Link
        to="/songs/"
        style={{ textDecoration: "none" }}
        onClick={props.close}
      >
        <ListItem button>
          <ListItemIcon>
            <StraightenIcon />
          </ListItemIcon>
          <ListItemText primary="Songs" />
        </ListItem>
      </Link>
      <Link
        to="/setlist/"
        style={{ textDecoration: "none" }}
        onClick={props.close}
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Setlists" />
        </ListItem>
      </Link>
      <Link
        to="/gigs/"
        style={{ textDecoration: "none" }}
        onClick={props.close}
      >
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Gigs" />
        </ListItem>
      </Link>
      <Link
        to="/settings/"
        style={{ textDecoration: "none" }}
        onClick={props.close}
      >
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Link>
    </div>
  );
};
