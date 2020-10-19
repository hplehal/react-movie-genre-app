import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { Action } from './Action';


function App() {
  return (
    <Router>
      <div >
        <h1>Choose Category:</h1>
        <nav>
          <ul>
            <li>
              <Link to="/action">Action</Link>
            </li>
            <li>
              <Link to="/comedy">Comedy</Link>
            </li>
            <li>
              <Link to="/thriller">Thriller</Link>
            </li>
            <li>
              <Link to="/drama">Drama</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Redirect exact from="/" to="/action" />
          <Route exact path="/action" render={(props) => <Action {...props} genre="action" />} />
          <Route exact path="/comedy" render={(props) => <Action {...props} genre="comedy" />} />
          <Route exact path="/drama" render={(props) => <Action {...props} genre="drama" />} />
          <Route exact path="/thriller" render={(props) => <Action {...props} genre="thriller" />} />
        </Switch>



      </div >
    </Router>
  )
}

export default App;
