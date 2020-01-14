import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

import ReportCard from "./mainContentCards/reportCard";
import RecentActivityCard from "./sideCards/recentActivityCard";
import ExamFeaturedCard from "./mainContentCards/examsFeaturedCard";

// const BigCards = props => {
//   return (
//     <>
//       <Row>
//         <Col lg={8}>
//           <ReportCard />
//           <hr />
//           <ExamFeaturedCard />
//         </Col>
//         <Col lg={4}>
//           <RecentActivityCard />
//           <hr />
//           <RecentActivityCard />
//         </Col>
//       </Row>
//     </>
//   );
// };

class BigCards extends Component {
  state = { posts: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        {this.state.posts.map(value => (
          <div>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default BigCards;
