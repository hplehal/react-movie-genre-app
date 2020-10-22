import React from 'react'
import { Link } from 'react-router-dom';

export const MovieList = ({ movies, genre }) => {
    return (
        <section className="movieList">
            {
                movies ? movies.map((data) => {
                    return (
                        <div className="movieContent" key={data.imdbID}>
                            <Link to={`${genre}/${data.imdbID}`}>
                                <img alt={`Poster of ${data.Title}`} src={data.Poster} />
                                <div>
                                    <i className="fas fa-star"> {data.imdbRating}</i>
                                    <h3>{data.Title}</h3>
                                    <p>({data.Year})</p>
                                </div>

                            </Link>
                        </div>
                    )
                }) : <h1>Loading!!!!</h1>
            }
        </section>
    )
}
