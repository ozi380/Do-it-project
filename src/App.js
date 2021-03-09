import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Dashboard1 from "./components/Dashboard1/Dashboard1";
const presses = [
  { date: "2019-04-12T03:23:34.000Z", category: "red" },
  { date: "2019-05-14T10:23:34.000Z", category: "red" },
  { date: "2019-07-15T04:23:34.000Z", category: "red" },
  { date: "2019-03-13T11:23:34.000Z", category: "red" },
  { date: "2019-10-18T05:23:34.000Z", category: "red" },
  { date: "2019-09-22T16:23:34.000Z", category: "red" },
  { date: "2019-09-22T16:23:34.000Z", category: "red" },
  { date: "2019-09-22T16:23:34.000Z", category: "red" },
  { date: "2019-12-24T04:23:34.000Z", category: "red" },
  { date: "2020-01-24T08:23:34.000Z", category: "red" },
  { date: "2019-11-13T17:23:34.000Z", category: "red" },
  { date: "2019-03-12T10:23:34.000Z", category: "red" },
  { date: "2019-02-20T21:23:34.000Z", category: "red" },
];

const App = () => {
  const [challengeName, setChallengeName] = useState(null);
  const [dailyAvg, setDailyAvg] = useState((2 + 6 + 8 + 9 + 7 + 4) / 6);
  const [weekklyAvg, setWeeklyAvg] = useState(2);
  const [busyHour, setBusyHour] = useState(4);
  const [edit, setEdit] = useState(true);
  const setEditFunc = () => setEdit(!edit);
  useEffect(() => {}, []);

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
