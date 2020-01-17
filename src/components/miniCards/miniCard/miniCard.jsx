import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const miniCards = props => {
  return (
    <Card className="card-common">
      <Card.Body>
        <Row>
          <Col sm={8}>
            <Card.Text className="text-right text-secondary">
              <h5>{props.heading}</h5>
              <h3 className={"text-" + props.color}>{props.value}</h3>
            </Card.Text>
          </Col>
          <Col sm={4}>
            <div className="d-flex  align-items-center justify-content-end h-100">
              <FontAwesomeIcon
                icon={props.faIcons}
                size="3x"
                className={"text-" + props.color}
              />
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className={"bg-" + props.color + " text-light text-right"}>
        <span className="mr-2">{props.footerHeading}</span>
        <span className="mr-5">{props.footerValue}</span>
        <FontAwesomeIcon
          icon={props.faFooterIcons}
          size="md"
          className="mr-2"
        />
      </Card.Footer>
    </Card>
  );
};

export default miniCards;
