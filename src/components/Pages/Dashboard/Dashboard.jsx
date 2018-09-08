import React from "react";
import { connect } from "react-redux";
import DashboardTemplate from "../../Templates/DashboardTemplate/DashboardTemplate";
const Dashboard = props => {
  return <DashboardTemplate news={props.news || []} />;
};

const mapStateToProps = state => ({
  news: state.common.news
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
