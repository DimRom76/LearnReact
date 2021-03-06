import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Currency from './currency';
import Home from './Home';
import Clock from './Clock';
import Users from './Users';
import UserId from './UserId';
import Error from './Error';
import MyEvent from './MyEvent';
import MyState from './MyState';
import LifeCycle from './LifeCycle';
import LifeCycle1 from './LifeCycle1';
import LifeCycle2 from './LifeCycle2';
import UseEffect from './UseEffect';

function App() {
  return (
    <div className="App">
      {/* ПРОСТАЯ НАВИГАЦИЯ С ПЕРЕЗАГРУЗКОЯ СТРАНИЦіы
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
      </ul> */}
      <Router>
        <div>
          {/* SPA навигация без перезагрузки страницы */}
          <nav>
            <li>
              <NavLink exact to="/">
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/currency">Currency Exchange</NavLink>
            </li>
            <li>
              <NavLink to="/clock">Clock</NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/event">
                Event
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/state">
                State
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/cycle">
                Life cycle
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/useEffect1">
                useEffect1
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeMy" to="/useEffect2">
                useEffect2
              </NavLink>
            </li>
          </nav>
          <Switch>
            {/* выполняеться по очереди до первого совпадения, внизу можно добавить
            без exact path то что будет выполняться если ни одно из совпадений не прошло (404) */}
            <Route exact path="/" component={Home} />
            <Route path="/currency" component={Currency} />
            {/* передаем props через route */}
            <Route
              path="/clock"
              render={props => (
                <Clock {...props} title={`Props through render`} />
              )}
            />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:userName" component={UserId} />
            <Route path="/event" component={MyEvent} />
            <Route path="/state" component={MyState} />
            <Route exact path="/cycle" component={LifeCycle} />
            <Route
              exact
              path="/cycle/function"
              render={props => <LifeCycle2 {...props} arg="150" />}
            />
            <Route exact path="/cycle/class" component={LifeCycle1} />
            <Route
              exact
              path="/useEffect1"
              render={props => <UseEffect {...props} categoryTd="1" />}
            />
            <Route
              exact
              path="/useEffect2"
              render={props => <UseEffect {...props} categoryTd="2" />}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
