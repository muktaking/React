import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from "react-scrollspy";

const navbarHome = props => {
  const items = ["home", "exam", "feature", "demo", "clients", "contact"];
  const pages = ["signup", "login"];
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="md">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        {/* <Nav className="ml-auto"> */}
        <Scrollspy
          items={items}
          currentClassName={"active"}
          className="navbar-nav ml-auto"
          offset={-80}
        >
          {items.map(value => (
            <Nav.Item key={value} as="li" className="mr-3">
              <Nav.Link href={"#" + value}>{value}</Nav.Link>
            </Nav.Item>
          ))}
          {pages.map(value => (
            <Nav.Item key={value} as="li" className="mr-3">
              <Nav.Link href={"/" + value}>{value}</Nav.Link>
            </Nav.Item>
          ))}
        </Scrollspy>
        {/* </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbarHome;
