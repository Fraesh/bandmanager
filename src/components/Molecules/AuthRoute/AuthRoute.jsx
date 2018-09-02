import * as React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const AuthRoute = ({ component: Component, loggedIn, ...rest }) => {
  const renderedComponent = props => (
    loggedIn
    ? <Component { ...props } />
    : <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
  );
  return <Route {...rest} render={renderedComponent} />
}


const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
