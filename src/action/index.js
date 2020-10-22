// Movie
// export const movieGenres = (genres) => {
//     return {
//         type: 'MOVIE_GENRE',
//         payload: genres
//     }
// }

export const movieSelectedRequest = (movie) => {
    return {
        type: 'MOVIE_SELECTED_FETCH',
        payload: movie
    }
}

export const movieSelectedSuccess = (movie) => {
    return {
        type: 'MOVIE_SELECTED_FETCH_SUCCESS',
        payload: movie
    }
}
export const movieSelectedFailure = (moiveID, movie) => {
    return {
        type: 'MOVIE_SELECTED_FETCH_FAILED',
        payload: movie
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

export const fetchMovieSelected = (movieID, genre) => async dispatch => {
    dispatch(fetchMoviesRequest(genre, movieID));
    try {
        const response = await fetch(`http://localhost:8000/${genre}?imdbID=${movieID}`);
        const movie = await response.json();
        dispatch(fetchMoviesSuccess(movie[0]));
    } catch (error) {
        dispatch(fetchMoviesFailed(error))
    }
}