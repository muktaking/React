import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchForm from "../form/search/searchForm";

const navbar = props => {
  const classes = {
    sideNav: ["flex-column", "mt-4"].join(" "),
    sideNavLink: ["text-white", "p-3", "mb-2"].join(" "),
    fa: ["text-light", "fa-lg", "mr-3"].join(" "),
    formControl: "search-input",
    searchBtn: "search-button"
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
    <Navbar expand="md" variant="light" className="py-0">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="ml-auto mb-2 bg-light"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid="true">
          <Row>
            {/* Sidebar */}
            <Col xl={2} lg={3} md={4} className="fixed-top sidebar">
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
                      <FontAwesomeIcon
                        icon={value}
                        size="lg"
                        className={classes.fa}
                      />
                      {menuName[index]}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            {/* s */}

            {/* top-nav */}
            <Col
              xl={10}
              lg={9}
              md={8}
              className="ml-auto  bg-dark py-2 fixed-top top-navbar"
            >
              <Row className="align-items-center">
                <Col md={4}>
                  <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
                </Col>
                <Col md={5}>
                  <SearchForm
                    formControl={classes.formControl}
                    searchBtn={classes.searchBtn}
                  />
                </Col>
                <Col md={3}>
                  <Nav>
                    <Nav.Item className="icon-parent">
                      <Nav.Link className="icon-bullet">
                        <FontAwesomeIcon
                          icon="comments"
                          size="lg"
                          className="text-muted"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="icon-parent">
                      <Nav.Link className="icon-bullet">
                        <FontAwesomeIcon
                          icon="bell"
                          size="lg"
                          className="text-muted"
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-md-auto">
                      <Nav.Link
                        data-toggle="modal"
                        data-target="#sign-out"
                        onClick={props.logoutClick}
                      >
                        <FontAwesomeIcon
                          icon="sign-out-alt"
                          size="lg"
                          className="text-danger"
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Col>
            {/* end of top-nav */}
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
