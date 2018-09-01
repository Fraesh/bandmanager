import React from "react";
import MainAppBar from "../../Organisms/MainAppBar/MainAppBar";
import MainDrawer from "../../Organisms/MainDrawer/MainDrawer";

class Layout extends React.Component {
  state = { open: false };
  render() {
    return (
      <div style={{display:'flex', width:'100%'}}>
        <MainDrawer open={this.state.open}onClose={()=> this.setState({open: false})}/>
        <MainAppBar title="BandManager" toggleDrawer={()=> this.setState({open: !this.state.open})}/>
        <div style={{marginTop:'3rem', flexGrow:1}}>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
