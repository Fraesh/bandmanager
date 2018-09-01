import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    container:{
        padding:theme.spacing.unit*2
    },
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });  

const SongTable = props => {
    const { classes, data } = props;

    return (
        <div className={classes.container}>
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Singer</TableCell>
              <TableCell>Key</TableCell>
              <TableCell >BPM</TableCell>
              <TableCell >Length</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>
                    {n.name}
                  </TableCell>
                  <TableCell >{n.singer[0]}</TableCell>
                  <TableCell >{n.key}</TableCell>
                  <TableCell >{n.bpm}</TableCell>
                  <TableCell numeric>{n.length}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      </div>
    );
}

export default withStyles(styles)(SongTable);