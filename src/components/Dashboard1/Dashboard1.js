import React from "react";
import ChallengeName from "../ChallengeName/ChallengeName";
import Graph from "../Graph/Graph";
import Stats from "../Stats/Stats";
import ResetButton from "../ResetButton/ResetButton";
import "./Dashboard1.css";
const Dashboard1 = () => {
  return (
    <div className="dashContainer">
      <ChallengeName />
      <h1>נתונים שעתיים של השבוע האחרון</h1>
      <Graph />
      <Stats />
      <ResetButton />
    </div>
  );
};
export default Dashboard1;
