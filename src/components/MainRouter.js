import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { GenrePageComponent } from './GenrePageComponent';
import { MovieDetail } from './MovieDetail';


export const MainRouter = ({ genres }) => {
    return (
        <main className="main">
            <Switch>
                {genres.map((genre, i) => <Route key={i} exact path={`/${genre}`} render={(props) => <GenrePageComponent {...props} genre={genre} />} />)}
                {genres.map((genre, i) => <Route key={i} exact path={`/${genre}/:movieID`} render={(props) => <MovieDetail {...props} genre={genre} />} />)}
                <Redirect from="/" to={`/${genres[0]}`} />
            </Switch>
        </main>
    )
}
