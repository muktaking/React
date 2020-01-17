import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import avatorImg from "../../assets/image/admin.jpeg";

const sidebar = props => {
  const classes = {
    sideNav: ["flex-column", "mt-4"].join(" "),
    sideNavLink: ["text-white", "p-3", "mb-2"].join(" "),
    fa: ["text-light", "fa-lg", "mr-3"].join(" ")
  };

  const faIcons = [
    "home",
    "user",
    "envelope",
    "shopping-cart",
    "chart-line",
    "chart-bar",
    "table",
    "wrench",
    "file-alt"
  ];
  const menuName = [
    "Dashboard",
    "Profile",
    "Inbox",
    "Sales",
    "Analytics",
    "Charts",
    "Tables",
    "Settings",
    "Documentation"
  ];
  const navLinks = [
    "/dashboard",
    "/category",
    "/api1",
    "/api2",
    "/api3",
    "/api4",
    "/api5",
    "/api6",
    "/api7"
  ];

  return (
    <>
      <Navbar.Brand
        href="#home"
        className="text-white d-block mx-auto text-center py-3 mb-4 bottom-border"
      >
        React-Bootstrap
      </Navbar.Brand>
      <div class="bottom-border pb-3">
        <Image
          src={avatorImg}
          roundedCircle={true}
          style={{ width: "50px" }}
          className="mr-3"
        />
        <a href="#" className="text-white">
          Helen Smith
        </a>
      </div>
      <Nav className={classes.sideNav}>
        {faIcons.map((value, index) => (
          <Nav.Item>
            <NavLink
              to={navLinks[index]}
              className={"nav-link " + classes.sideNavLink + " sidebar-link"}
              activeClassName="current"
            >
              <FontAwesomeIcon icon={value} size="lg" className={classes.fa} />
              {menuName[index]}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default sidebar;
