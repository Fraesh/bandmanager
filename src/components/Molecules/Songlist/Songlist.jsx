import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { Droppable, Draggable } from "react-beautiful-dnd";

const styles = theme => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    width: 300
  },
  avatars: {
    width: 60,
    display: "flex",
    justifyContent: "start"
  },
  avatar: {
    gridRow: 1
    // gridColumn:1,
  },
  paper: {
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: theme.spacing.unit
  }
});

const Songlist = props => {
  const { classes, dense, secondary, data, heading, id } = props;
  return (
    <Paper className={classes.paper} elevation={1}>
      <Droppable droppableId={id.toString()}>
        {provided => (
          <List
            dense={dense}
            className={classes.root}
            subheader={
              <ListSubheader component="div">
                {heading || "Songs"}
              </ListSubheader>
            }
          >
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ minHeight: 500 }}
            >
              {provided.placeholder}
              {data &&
                data.map((song, i) => {
                  return (
                    <Draggable
                      draggableId={song.id || i}
                      index={i}
                      key={song.id}
                    >
                      {provided => (
                        <div
                          key={song.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItem>
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
                              secondary={secondary ? song.length : null}
                            />
                            <ListItemSecondaryAction>
                              <ListItemText
                                primary={song.bpm + " bpm"}
                                secondary={secondary ? song.key : null}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
            </div>
          </List>
        )}
      </Droppable>
    </Paper>
  );
};

export default withStyles(styles)(Songlist);
