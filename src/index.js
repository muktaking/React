/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faShoppingCart,
  faChartLine,
  faChartBar,
  faTable,
  faWrench,
  faFileAlt,
  faSearch,
  faComments,
  faBell,
  faSignOutAlt,
  faSync,
  faFileImport,
  faMedal,
  faClock,
  faPoll,
  faBalanceScale,
  faUsers,
  faFile,
  faCalendarAlt,
  faStar,
  faBars,
  faCloud,
  faHourglass,
  faThumbsUp,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

library.add(
  fab,
  faHome,
  faUser,
  faEnvelope,
  faShoppingCart,
  faChartLine,
  faChartBar,
  faTable,
  faWrench,
  faFileAlt,
  faSearch,
  faComments,
  faBell,
  faSignOutAlt,
  faSync,
  faFileImport,
  faMedal,
  faClock,
  faPoll,
  faBalanceScale,
  faUsers,
  faFile,
  faCalendarAlt,
  faStar,
  faBars,
  faCloud,
  faHourglass,
  faThumbsUp,
  faQuoteLeft
);

ReactDOM.render(<App />, document.getElementById("root"));
