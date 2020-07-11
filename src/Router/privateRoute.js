import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Header from "../Header/navigation";

export const PrivateRoute = ({ isAutheticated,component:Component ,...rest }) => (
  <div>
    <Route
      {...rest}
      component={(props) =>
        isAutheticated ? (
          <div>
            <Header {...props}/>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    isAutheticated: state.auth.token != null,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
