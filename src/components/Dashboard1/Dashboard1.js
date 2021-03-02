import React, { Fragment } from "react";
import ChallengeName from "../ChallengeName/ChallengeName";
import Graph from "../Graph/Graph";
import Stats from "../Stats/Stats";
import ResetButton from "../ResetButton/ResetButton";
const Dashboard1 = () => {
  return (
    <>
      <ChallengeName />
      <h1>נתונים שעתיים של השבוע האחרון</h1>;
      <Graph />
      <Stats />
      <ResetButton />
    </>
  );
};
export default Dashboard1;
