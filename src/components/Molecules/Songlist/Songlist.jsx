import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";
import { Droppable } from "react-beautiful-dnd";
import SonglistItem from "./components/SonglistItem";
import { secondsToTime } from "../../common/time";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  },
  button: {
    marginRight: -theme.spacing.unit * 2,
    padding: 0
  },
  listHeader: {
    display: "flex",
    justifyContent: "space-between"
  }
});

class Songlist extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      classes,
      dense,
      secondary,
      data,
      heading,
      id,
      onDelete
    } = this.props;
    const setTime = data.reduce((total, song) => total + song.length, 0);
    return (
      <Paper className={classes.paper} elevation={1}>
        <Droppable droppableId={id.toString()}>
          {provided => (
            <List
              dense={dense}
              className={classes.root}
              subheader={
                <ListSubheader component="div" className={classes.listHeader}>
                  {heading || "Songs"}
                  {onDelete && (
                    <React.Fragment>
                      <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem
                          onClick={() => {
                            onDelete(id);
                            this.handleClose();
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                      <IconButton
                        className={classes.button}
                        aria-label="Delete"
                        aria-owns={this.state.anchorEl ? "simple-menu" : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                    </React.Fragment>
                  )}
                </ListSubheader>
              }
            >
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ minHeight: 200 }}
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
  }
}

export default withStyles(styles)(Songlist);
