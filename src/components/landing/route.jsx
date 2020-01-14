import React from "react";
import { Route } from "react-router-dom";

import Landing from "./landing";
import Signup from "../pages/signs/signup/signup";
import Login from "../pages/signs/signup/login";

const route = props => {
  return (
    <>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </>
  );
};

export default route;
