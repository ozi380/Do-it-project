import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard1 from "../Dashboard1/Dashboard1";

import "./Home.css";
const Home = (props) => {
  const { challengeName } = props;
  return (
    <Link to="/Dashboard1" style={{ textDecoration: "none" }}>
      <div className=" homePage ">
        <div>
          {challengeName ? challengeName : "לחץ כדי לבחור שם לאתגר החדש שלך"}
        </div>
      </div>
    </Link>
  );
};
export default Home;
