import React from "react";
import SettingsTemplate from "../../Templates/SettingsTemplate/SettingsTemplate";
import { connect } from "react-redux";
import { updateUserData } from "../../../store/auth/authActions";
class Settings extends React.Component {
  changeColor = (color, event) => {
    this.props.updateUserData({ color: color.hex });
  };

  changeSinger = singer => {
    this.props.updateUserData({ singer: singer });
  };
  render() {
    return (
      <SettingsTemplate
        user={this.props.user}
        changeColor={this.changeColor}
        changeSinger={this.changeSinger}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});
const mapDispatchToProps = {
  updateUserData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
