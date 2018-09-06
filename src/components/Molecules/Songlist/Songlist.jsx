import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";
import { Droppable } from "react-beautiful-dnd";
import SonglistItem from "./components/SonglistItem";
import { secondsToTime } from "../../common/time";

const styles = theme => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    width: 300
  },
  paper: {
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: theme.spacing.unit
  },
  footer: {
    color: theme.palette.text.secondary,
    textAlign: "right",
    marginRight: theme.spacing.unit * 2
  }
});

const Songlist = props => {
  const { classes, dense, secondary, data, heading, id } = props;
  const setTime = data.reduce((total, song) => total + song.length, 0);
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
              {data &&
                data.map((song, i) => {
                  return (
                    <SonglistItem
                      secondary={secondary}
                      song={song}
                      i={i}
                      key={i}
                    />
                  );
                })}
            </div>
            {provided.placeholder}
          </List>
        )}
      </Droppable>
      <Typography variant="body2" gutterBottom className={classes.footer}>
        Length: {secondsToTime(setTime)}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Songlist);
