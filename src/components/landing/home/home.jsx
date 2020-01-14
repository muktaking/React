import React from "react";
import Button from "react-bootstrap/Button";
import NavbarHome from "./navbar/navbarHome";

const home = props => {
  return (
    <div id="home">
      <NavbarHome />
      {/* Landing */}
      <div className="landing">
        <div className="home-wrap">
          <div className="home-inner"></div>
        </div>
      </div>
      <div className="caption text-center">
        <h1>Welcome to E-Exam System</h1>
        <h3>A new era just has begun</h3>
        <Button variant="outline-light" size="lg">
          Exams
        </Button>
      </div>
      {/* End of Landing */}
    </div>
  );
};

export default home;
