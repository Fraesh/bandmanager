import React from "react";
import SetlistTable from "../../Molecules/SetlistTable/SetlistTable";
import AddSetlistDialog from "../../Organisms/AddSetlistDialog/AddSetlistDialog";
import FAB from "../../Atoms/FAB/FAB";

class SelectSetlistScreenTemplate extends React.Component {
  state = { modal: false };

  addSetlist = setlist => {
    this.setState({ modal: false });
    setlist && this.props.addSetlist(setlist);
  };

  render() {
    return (
      <div>
        <AddSetlistDialog open={this.state.modal} onClose={this.addSetlist} />
        <FAB onClick={() => this.setState({ modal: true })} />
        <SetlistTable data={this.props.data} addSetlist={this.props.addSetlist} />
      </div>
    );
  }
}

export default SelectSetlistScreenTemplate;
