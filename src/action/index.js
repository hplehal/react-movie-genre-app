// Movie
export const movieSelectedRequest = (movie) => {
    return {
        type: 'MOVIE_SELECTED_FETCH',
        payload: {
            movie
        }
    }
}

export const movieSelectedSuccess = (movie) => {
    return {
        type: 'MOVIE_SELECTED_FETCH_SUCCESS',
        payload: {
            movie
        }
    }
}
export const movieSelectedFailure = (error) => {
    return {
        type: 'MOVIE_SELECTED_FETCH_FAILED',
        payload: {
            error
        }
    }
}

// Movies
export const fetchMoviesRequest = (genre) => {
    return {
        type: 'MOVIES_FETCH',
        payload: {
            genre
        }
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: "MOVIES_FETCH_SUCCESS",
        payload: {
            movies
        }
    }
}

export const fetchMoviesFailed = (error) => {
    return {
        type: "MOVIES_FETCH_FAILED",
        payload: {
            error
        }
    }
}

// @param movies and value this will sort the value 
export const sortMovies = (movies, value) => (dispatch) => {
    let moviesData = [];
    if ('sortAtoZ' === value) {
        moviesData = movies.slice().sort((a, b) => {
            let titleA = a.Title.toLowerCase()
            let titleB = b.Title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        })
    } else if ('sortByRatings' === value) {
        moviesData = movies.slice().sort((a, b) => {
            return b.imdbRating - a.imdbRating;
        })

    } else if ('sortByPopularity' === value) {
        moviesData = movies.slice().sort((a, b) => {
            let votesA = parseInt(a.imdbVotes.replace(/,/g, ''), 10);
            let votesB = parseInt(b.imdbVotes.replace(/,/g, ''), 10);;
            return votesB - votesA;
        })

    } else if ('sortByRelease' === value) {
        moviesData = movies.slice().sort((a, b) => {
            let dateA = new Date(a.Released);
            let dateB = new Date(b.Released);
            return dateB - dateA;
        })
    }

    return dispatch({
        type: 'SORT_MOVIES',
        payload: {
            movies: moviesData
        }
    })
}



//  @param genre to fetch Movies data
export const fetchMoviesData = (genre) => async dispatch => {
    dispatch(fetchMoviesRequest(genre));
    try {
        const response = await fetch(`http://localhost:8000/${genre}`);
        const movies = await response.json();
        dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
        dispatch(fetchMoviesFailed(error))
    }
}

//  @param movieID & genre to fetch Movie data
export const fetchMovieSelected = (movieID, genre) => async dispatch => {
    dispatch(movieSelectedRequest(genre, movieID));
    try {
        const response = await fetch(`http://localhost:8000/${genre}?imdbID=${movieID}`);
        const movies = await response.json();
        dispatch(movieSelectedSuccess(movies[0]));
    } catch (error) {
        dispatch(movieSelectedFailure(error))
    }
}