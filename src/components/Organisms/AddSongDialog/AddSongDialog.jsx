import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {};

class AddSongDialog extends React.Component {
  state = { name: "", key: "", bpm: NaN, length: "", singer: "" };
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={() => onClose()}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">Add Song</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Song Name"
            type="text"
            onChange={data => this.setState({ name: data.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="singer"
            label="Singer"
            type="text"
            onChange={data => this.setState({ singer: data.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="key"
            label="Key"
            type="text"
            onChange={data => this.setState({ key: data.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="bom"
            label="BPM"
            type="number"
            onChange={data => this.setState({ bpm: data.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="length"
            label="Length"
            type="text"
            onChange={data => this.setState({ length: data.target.value })}
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
                key: this.state.key,
                bpm: this.state.bpm,
                singer: this.state.singer,
                length: this.state.length
              })
            }
            color="primary"
          >
            AddSong
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddSongDialog);
