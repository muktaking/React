import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../sidebar/sidebar";
import Topbar from "../topbar/topbar";
import MiniCards from "../cards/miniCards/miniCards";
import BigCards from "../cards/bigCards/bigCards";

const navbar = props => {
  return (
    <Navbar expand="md" variant="light" className="py-0">
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="ml-auto mb-2 bg-light"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid="true">
          <Row>
            <Col xl={2} lg={3} md={4} className="sidebar">
              <Sidebar />
            </Col>

            <Col xl={10} lg={9} md={8}>
              <Row>
                <Topbar logoutClick={props.logoutClick} />
              </Row>
              <Row className="pt-md-3 mt-md-3 mb-2 ml-3">
                <MiniCards />
                {/* <Col sm={6} className="p-2"></Col> */}
              </Row>
              <div className="pt-md-2 mt-md-2 mb-2 ml-3">
                <BigCards />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
