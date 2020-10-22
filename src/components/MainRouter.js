import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GenrePageContainer from '../containers/GenrePageContainer';
import MovieDetailContainer from '../containers/MovieDetailContainer';

const MainRouter = ({ genres }) => {
    return (
        <main className="main">
            <Switch>
                {genres.map((genre, i) => <Route key={i} exact path={`/${genre}`} render={(props) => <GenrePageContainer {...props} genre={genre} />} />)}
                {genres.map((genre, i) => <Route key={i} exact path={`/${genre}/:movieID`} render={(props) => <MovieDetailContainer {...props} genre={genre} />} />)}
                <Redirect from="/" to={`/${genres[0]}`} />
            </Switch>
        </main>
    )
}

export default MainRouter;