import React, { useState } from "react";
import ChallengeName from "../ChallengeName/ChallengeName";
import Graph from "../Graph/Graph";
import Stats from "../Stats/Stats";
import ResetButton from "../ResetButton/ResetButton";
import "./Dashboard1.css";
const Dashboard1 = (props) => {
  const {
    setChallengeName,
    challengeName,
    edit,
    setEditFunc,
    dailyAvg,
    weeklyAvg,
    busyHour,
  } = props;
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
      <h1 className="statsTitle">נתונים שעתיים של השבוע האחרון</h1>
      <Graph />
      <Stats dailyAvg={dailyAvg} weeklyAvg={weeklyAvg} busyHour={busyHour} />
      <ResetButton />
    </div>
  );
};
export default Dashboard1;
