import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { GenrePageComponent } from './GenrePageComponent';
import { MovieDetail } from './MovieDetail';


function App() {
  const [genres] = useState(["action", "drama", "comedy", "thriller"])
  return (
    <Router>
      <header>
        <nav>
          <Link to='/'>
            <img src="https://www.inpixon.com/hubfs/INPX-Logo-II-White.svg" alt="inpixon white logo" />
          </Link>
          <ul>
            {
              genres.map((genre, i) => {
                return (
                  <li key={i}>
                    <Link to={`/${genre}`} >{genre}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
      <main className="main">
        <Switch>
          {genres.map((genre, i) => <Route key={i} exact path={`/${genre}`} render={(props) => <GenrePageComponent {...props} genre={genre} />} />)}
          {genres.map((genre, i) => <Route key={i} exact path={`/${genre}/:movieID`} render={(props) => <MovieDetail {...props} genre={genre} />} />)}
          <Redirect from="/" to={`/${genres[0]}`} />
        </Switch>
      </main>

    </Router >
  )
}

export default App;
