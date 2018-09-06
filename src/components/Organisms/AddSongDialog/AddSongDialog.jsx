import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import { timeToSeconds } from "./../../common/time";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class AddSongDialog extends React.Component {
  state = { name: "", key: "", bpm: NaN, length: "", singer: [] };
  render() {
    const {
      classes,
      theme,
      onClose,
      selectedValue,
      users,
      ...other
    } = this.props;

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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
            <Select
              multiple
              value={this.state.singer}
              onChange={e => this.setState({ singer: e.target.value })}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {users.map(name => (
                <MenuItem
                  key={name.uid}
                  value={name.displayName}
                  style={{
                    fontWeight:
                      this.state.name.indexOf(name.displayName) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium
                  }}
                >
                  {name.displayName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            id="bpm"
            label="BPM"
            type="number"
            onChange={data => this.setState({ bpm: data.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="length"
            label="Length"
            type="time"
            inputProps={{ min: "0:00", max: "100:59" }}
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
                length: timeToSeconds(this.state.length)
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

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles, { withTheme: true })(AddSongDialog));
