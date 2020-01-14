import React from "react";

import Home from "./home/home";
import Exam from "./exam/exam";
import Feature from "./feature/feature";
import Demo from "./demo/demo";
import Clients from "./clients/clients";
import Contact from "./contact/contact";

import "./landing.css";

const landing = props => {
  return (
    <>
      <Home />
      <Exam />
      <Feature />
      <Demo />
      <Clients />
      <Contact />
    </>
  );
};

export default landing;
