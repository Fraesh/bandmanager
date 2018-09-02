import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {};

const Setlist = props => {
  const { classes, dense, secondary, data } = props;
  return (
    <List dense={dense}>
      {data && data.map(song => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
               {song.singer[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={song.name}
              secondary={secondary ? song.length : null}
            />
            <ListItemSecondaryAction>
            <ListItemText
              primary={song.bpm + " bpm"}
              secondary={secondary ? song.key : null}
            />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default withStyles(styles)(Setlist);
