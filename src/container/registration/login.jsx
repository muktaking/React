import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import NavbarHome from "../../components/navbar/navbarHome";

import "../../assets/scss/section/registration.scss";
const home = props => {
  return (
    <div className="registration">
      <NavbarHome isLanding={false} />
      {/* Landing */}
      <div className="landing">
        <div className="home-wrap">
          <div className="home-inner"></div>
        </div>
      </div>
      <div className="caption text-center" style={{ top: "15%" }}>
        <h1>Login Form</h1>
        <div className="heading-underline"></div>
        <Form className="mb-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit" className="btn-submit">
            Submit
          </Button>
        </Form>
        <Row>
          <Col md={6}>
            <p className="lead">Forget Your Password</p>
            <a href="" className="btn btn-danger">
              Reset Your Password
            </a>
          </Col>
          <Col md={6}>
            <p className="lead">I am not a member yet!</p>
            <a href="" className="btn btn-secondary">
              Sign up
            </a>
          </Col>
        </Row>
      </div>
      {/* End of Landing */}
    </div>
  );
};

export default home;
