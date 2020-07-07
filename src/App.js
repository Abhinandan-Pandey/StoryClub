import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./User/Pages/login";
import Stories from "./Home/pages/stories";
import Profile from "./Home/pages/profile";
import Layout from "./Hoc/layout";
import * as actions from "./Store/actions/index";
import storyModel from "./Home/components/storyModel";
import profileEditModel from "./Home/components/profileEditModel";

function App(props) {
  const { onTryAutoSignup } = props;
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Layout {...props}>
        <Switch>
          <Route path="/home" exact component={Stories} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Login} />
          <Route path="/storyModel" component={storyModel} />
          <Route path="/profileEditModel" component={profileEditModel} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
  }

  return <div>{routes}</div>;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    path: state.auth.path,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
