import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Currency from "./currency";
import Home from "./Home";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/currency">Currency Exchange </a>
            </li>
            <li>
              <a href="/clock">Clock</a>
            </li>
          </ul>
          <Switch>
            {/* выполняеться по очереди до первого совпадения, внизу можно добавить
            без exact path то что будет выполняться если ни одно из совпадений не прошло (404) */}
            <Route exact path="/" component={Home} />
            <Route exact path="/currency" component={Currency} />
            <Route exact path="/clock" component={Clock} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
