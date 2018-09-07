import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Draggable } from "react-beautiful-dnd";
import { secondsToTime } from "../../../common/time";

const styles = theme => ({
  root: {
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    transition: "box-shadow 0.2s ease-in-out"
  },
  isDragging: {
    boxShadow: theme.shadows[20],
    transition: "box-shadow 0.2s ease-in-out"
  },
  avatars: {
    width: 60,
    display: "flex",
    justifyContent: "start"
  },
  avatar: {
    gridRow: 1
    // gridColumn:1,
  }
});

const SonglistItem = props => {
  const { song, i, classes, secondary } = props;
  return (
    <Draggable draggableId={song.id || i} index={i} key={song.id}>
      {(provided, snapshot) => (
        <div
          key={song.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {}
          <ListItem
            className={
              snapshot.isDragging
                ? classes.root + " " + classes.isDragging
                : classes.root
            }
          >
            <div className={classes.avatars}>
              {song.singer &&
                song.singer.map((singer, i) => (
                  <ListItemAvatar
                    key={i}
                    className={classes.avatar}
                    style={
                      i >= 1
                        ? {
                            marginLeft: -song.singer.length * 8
                          }
                        : {}
                    }
                  >
                    <Avatar>{singer[0]}</Avatar>
                  </ListItemAvatar>
                ))}
            </div>
            <ListItemText
              primary={song.name}
              secondary={secondary ? secondsToTime(song.length) : null}
            />
            <ListItemSecondaryAction>
              <ListItemText
                primary={song.bpm + " bpm"}
                secondary={secondary ? song.mkey : null}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(SonglistItem);
