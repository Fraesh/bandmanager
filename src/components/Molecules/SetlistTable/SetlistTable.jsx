import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import history from "./../../../store/history";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {}
});

const SetlistTable = props => {
  const { classes, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} padding="dense">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Sets</TableCell>
            <TableCell>Songs</TableCell>
            <TableCell>Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow
                key={n.id}
                hover
                onClick={event => history.push(n.id + "/")}
              >
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.date}</TableCell>
                <TableCell>{n.setOrder.length}</TableCell>
                <TableCell>{n.songs}</TableCell>
                <TableCell numeric>{n.length}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SetlistTable);
