import React from 'react'

const GenreHeader = ({ genre, movies, table, handleChange, handleClick }) => {
    return (
        <section className="genreHeader">
            <h2>{genre}</h2>
            <div>
                <select onChange={(event) => handleChange(movies, event.target.value)}>
                    <option value="sortByRelease">By Release Date</option>
                    <option value="sortAtoZ">A-Z</option>
                    <option value="sortByPopularity" >By Votes</option>
                    <option value="sortByRatings" >By Ratings</option>
                </select>
                {table ? <button onClick={handleClick}>List View</button> : <button onClick={handleClick}>Table</button>}
            </div>
        </section>
    )
}

export default GenreHeader;