import React, { useState } from "react";
import ChallengeName from "../ChallengeName/ChallengeName";
import Graph from "../Graph/Graph";
import Stats from "../Stats/Stats";
import ResetButton from "../ResetButton/ResetButton";
import "./Dashboard1.css";
const Dashboard1 = (props) => {
  const { setChallengeName, challengeName, edit, setEditFunc } = props;
  // const [challengeName, setChallengeName] = useState(null);
  // console.log(challengeName);
  return (
    <div className="dashContainer">
      <ChallengeName
        setChallengeName={setChallengeName}
        challengeName={challengeName}
        edit={edit}
        setEditFunc={setEditFunc}
      />
      <h1>נתונים שעתיים של השבוע האחרון</h1>
      <Graph />
      <Stats />
      <ResetButton />
    </div>
  );
};
export default Dashboard1;
