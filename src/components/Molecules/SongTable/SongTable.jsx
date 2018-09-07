import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { secondsToTime } from "./../../common/time";
import MediaQuery from "react-responsive";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {}
});

class SongTable extends React.Component {
  render() {
    const { classes, data, theme, onSongClick } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table} padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <MediaQuery
                query={
                  "(min-device-width: " + theme.breakpoints.values.md + "px)"
                }
              >
                <TableCell>Singer</TableCell>
              </MediaQuery>
              <TableCell>Key</TableCell>

              <TableCell>BPM</TableCell>
              <MediaQuery
                query={
                  "(min-device-width: " + theme.breakpoints.values.sm + "px)"
                }
              >
                <TableCell>Length</TableCell>
              </MediaQuery>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id} onClick={() => onSongClick(n.id)}>
                  <TableCell>{n.name}</TableCell>
                  <MediaQuery
                    query={
                      "(min-device-width: " +
                      theme.breakpoints.values.md +
                      "px)"
                    }
                  >
                    <TableCell>{n.singer[0]}</TableCell>
                  </MediaQuery>
                  <TableCell>{n.mkey}</TableCell>
                  <TableCell>{n.bpm}</TableCell>
                  <MediaQuery
                    query={
                      "(min-device-width: " +
                      theme.breakpoints.values.sm +
                      "px)"
                    }
                  >
                    <TableCell numeric>{secondsToTime(n.length)}</TableCell>
                  </MediaQuery>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withTheme()(withStyles(styles)(SongTable));
