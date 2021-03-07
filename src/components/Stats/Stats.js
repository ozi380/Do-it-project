import React, { Fragment } from "react";
import "./Stats.css";

const Stats = (props) => {
  const { dailyAvg, weeklyAvg, busyHour } = props;
  return (
    <div className="stats">
      <h3>{`ממוצע יומי: ${dailyAvg}`}</h3>
      <h3>{`השעה העמוסה ביותר: ${busyHour}`}</h3>
      <h3> {`ממוצע שבועי : ${weeklyAvg}`}</h3>
    </div>
  );
};
export default Stats;
