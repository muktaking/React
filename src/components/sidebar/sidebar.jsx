import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const navLinks = "#";

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
          src="assets/image/admin.jpeg"
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
            <Nav.Link
              href={navLinks}
              className={
                classes.sideNavLink +
                (value === "home" ? " current" : " sidebar-link")
              }
            >
              <FontAwesomeIcon icon={value} size="lg" className={classes.fa} />
              {menuName[index]}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default sidebar;
