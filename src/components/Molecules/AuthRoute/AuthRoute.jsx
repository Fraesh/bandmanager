import * as React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, loggedIn, ...rest }) => {
  const renderedComponent = props =>
    loggedIn ? <Component {...props} /> : <div />;
  return <Route {...rest} render={renderedComponent} />;
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
