import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MiniCards from "./miniCards/miniCards";
const cards = () => {
  return (
    <Container fluid={true}>
      <Row className="pt-md-3 mt-md-3 mb-5 ml-3">
        <MiniCards />
        <Col sm={6} className="p-2"></Col>
      </Row>
    </Container>
  );
};

export default cards;
