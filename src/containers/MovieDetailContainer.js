import React, { useEffect } from 'react'
import { fetchMovieSelected } from '../action';
import { connect } from 'react-redux'

const MovieDetailContainer = (props) => {
    const { genre, movie, fetchMovie, isLoading } = props
    useEffect(() => {
        fetchMovie(props.match.params.movieID, genre);
    }, []);
    return (
        <div className="movieDetails">
            {isLoading ?
                <>
                    <h2>{movie.Title}</h2>
                    <div className="imgContainer">
                        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
                    </div>

                    <div className="minorDetails">
                        <p>{movie.Year}</p>
                        <p>{movie.Runtime} | {movie.Genre}</p>
                    </div>

                    <i className="fas fa-star"> {movie.imdbRating}</i>
                    <p>{movie.Plot}</p>
                </>
                :
                <h3> Loading... </h3>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.selectedMovie.movie,
        isLoading: state.selectedMovie.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (movieID, genre) => dispatch(fetchMovieSelected(movieID, genre))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetailContainer);