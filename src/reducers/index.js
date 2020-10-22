import { combineReducers } from 'redux';

export const initialState = {
    movies: [],
    currentContent: [],
    movie: {},
    isFetching: false,
    error: '',
    currPage: 1,
    pageLimit: 6,
}

export const movieInitialState = {
    movie: {},
    isFetching: false,
    error: '',
}


export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_FETCH':
            return { ...state, isFetching: true }
        case 'MOVIES_FETCH_SUCCESS':
            return { ...state, movies: action.payload.movies }
        case 'MOVIES_FETCH_FAILED':
            const { error } = action.payload;
            return { ...state, error }
        case 'SORT_MOVIES':
            return { ...state, movies: action.payload.movies }
        default:
            return state
    }
}

export const selectedMovieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED_FETCH':
            return { ...state, isFetching: true }
        case 'MOVIE_SELECTED_FETCH_SUCCESS':
            const { movie } = action.payload;
            return { ...state, movie }
        case 'MOVIE_SELECTED_FETCH_FAILED':
            const { error } = action.payload;
            return { ...state, error }
        default:
            return state
    }
}

export const genresReducer = () => {
    return ["action", "drama", "comedy", "thriller"]
}

export const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    selectedMovie: selectedMovieReducer
})
