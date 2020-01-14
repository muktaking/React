import React from "react";
import Nav from "react-bootstrap/Nav";

const nav = props => {
  return (
    <Nav className={props.classes}>
      <Nav.Item>
        <Nav.Link href={props.href} className={props.classes}>
          {props.children}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default nav;
