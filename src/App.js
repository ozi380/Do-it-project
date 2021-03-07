import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Dashboard1 from "./components/Dashboard1/Dashboard1";

const App = () => {
  const [challengeName, setChallengeName] = useState(null);
  const [dailyAvg, setDailyAvg] = useState(2);
  const [weekklyAvg, setWeeklyAvg] = useState(3);
  const [busyHour, setBusyHour] = useState(4);
  const [edit, setEdit] = useState(true);
  const setEditFunc = () => setEdit(!edit);

  console.log("challenge by app :", challengeName);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/dashboard1">Dashboard</Link>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard1" component={Dashboard1}>
            <Dashboard1
              setChallengeName={setChallengeName}
              challengeName={challengeName}
              edit={edit}
              setEditFunc={setEditFunc}
              dailyAvg={dailyAvg}
              weeklyAvg={weekklyAvg}
              busyHour={busyHour}
            />
          </Route>
          <Route path="/">
            <Home challengeName={challengeName} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
