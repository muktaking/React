import React from "react";
import Col from "react-bootstrap/Col";

import MiniCard from "./miniCard/miniCard";

const miniCards = props => {
  const miniCards = {
    heading: ["Total Exams", "Your Rank", "Upcoming Exam", "Exam Result"],
    value: ["1300", "12", "Pulmonology", "67(60%)"],
    faIcons: ["file-alt", "medal", "file", "poll"],
    footerHeading: ["Exam Taken", "Total students", "Start On", "Overal Score"],
    footerValue: ["100", "1200", "01-01-2021", "60%"],
    color: ["info", "warning", "success", "dark"],
    faFooterIcons: ["file-import", "users", "clock", "balance-scale"]
  };
  return miniCards.heading.map((value, index) => (
    <Col key={index} xl={3} lg={6} className="p-2">
      <MiniCard
        heading={value}
        value={miniCards.value[index]}
        faIcons={miniCards.faIcons[index]}
        footerHeading={miniCards.footerHeading[index]}
        footerValue={miniCards.footerValue[index]}
        color={miniCards.color[index]}
        faFooterIcons={miniCards.faFooterIcons[index]}
      />
    </Col>
  ));
};

export default miniCards;
