import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

 const PublicRoute = ({ isAutheticated,component:Component,...rest }) => (
  <div>
    <Route
      {...rest}
      component={props=>
        isAutheticated ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    isAutheticated: state.auth.token != null,
  };
};

export default connect(mapStateToProps)(PublicRoute);
