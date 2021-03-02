import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Dashboard1 from "./components/Dashboard1/Dashboard1";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard1">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard1" component={Dashboard1}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
