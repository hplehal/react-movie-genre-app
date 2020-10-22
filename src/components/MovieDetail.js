import React, { useEffect, useState } from 'react'

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:8000/${props.genre}?imdbID=${props.match.params.movieID}`);
                const movie = await response.json();
                setMovie(movie[0]);
            }
            catch (error) {
                console.log("ooops!", error);
            }
        }
        fetchMovie();
    }, [props]);
    return (
        <div>
            {movie ?
                <>
                    <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
                    <p>{movie.imdbRating}</p>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Description}</p>
                </>
                :
                <h3> Loading... </h3>

            }
        </div>
    )
}
