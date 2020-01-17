import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchForm from "../form/search/searchForm";

const topbar = props => {
  const classes = {
    formControl: "search-input",
    searchBtn: "search-button"
  };

  return (
    <Col className="bg-dark py-2 top-navbar">
      <Row className="align-items-center">
        <Col md={4}>
          <h4 className="text-light text-uppercase mb-0">{props.pageName}</h4>
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
                <FontAwesomeIcon icon="bell" size="lg" className="text-muted" />
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
  );
};

export default topbar;
