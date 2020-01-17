import React from "react";
import { Route } from "react-router-dom";

import Landing from "./landing/landing";
import Signup from "./registration/signup";
import Login from "./registration/login";
import InnerContent from "./innerContent/innerContent";

const RoutePages = props => {
  return (
    <>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/dashboard" exact component={InnerContent} />
      <Route path="/category" exact component={InnerContent} />
      <Route path="/category/:slug" component={InnerContent} />
    </>
  );
};

export default RoutePages;
