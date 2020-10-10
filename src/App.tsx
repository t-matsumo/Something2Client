import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Contracts } from './page/Contracts';
import { Payments } from './page/Payments';
import { Summary } from './page/Summary';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Summary</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
            <li>
              <Link to="/contracts">Contracts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contracts">
            <Contracts />
          </Route>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/">
            <Summary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
