import { combineReducers } from 'redux';

export const initialState = {
    movies: [],
    isFetching: false,
    error: '',

}

export const moviesReducer = (state = { initialState }, action) => {
    switch (action.type) {
        case 'MOVIES_FETCH':
            return { ...state, isFetching: true }
        case 'MOVIES_FETCH_SUCCESS':
            const { movies } = action.payload;
            return { ...state, movies }
        case 'MOVIES_FETCH_FAILED':
            const { error } = action.payload;
            return { ...state, error }
        default:
            return state
    }
}

export const selectedMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
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
    selectedMovie: selectedMovieReducer,
})
