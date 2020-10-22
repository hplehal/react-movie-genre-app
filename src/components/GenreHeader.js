import React from 'react'

export const GenreHeader = ({ genre, handleChange, handleClick }) => {
    return (
        <section className="genreHeader">
            <h2>{genre}</h2>
            <div>
                <select onChange={(event) => handleChange(event.target.value)}>
                    <option value="sortByRelease">By Release Date</option>
                    <option value="sortAtoZ">A-Z</option>
                    <option value="sortByPopularity" >By Votes</option>
                    <option value="sortByRatings" >By Ratings</option>
                </select>
                <button onClick={handleClick}>Table</button>
            </div>
        </section>
    )
}
