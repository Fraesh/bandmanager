import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {};

class AddSetlistDialog extends React.Component {
  state = { name: "", date: "" };
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={() => onClose()}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Add Setlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Setlist Name"
            type="text"
            onChange={data => this.setState({ name: data.target.value })}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            margin="dense"
            id="date"
            label="Date"
            defaultValue={'2018-01-01'}
            type="date"
            onChange={data => this.setState({ date: data.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() =>
              onClose({
                name: this.state.name,
                date: this.state.date
              })
            }
            color="primary"
          >
            Add Setlist
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddSetlistDialog);
