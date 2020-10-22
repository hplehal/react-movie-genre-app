import React from 'react'

export const Table = ({ movies }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Year</th>
                        <th>Rated</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        movies ? movies.map((data) => {
                            return (
                                <tr key={data.imdbID}>
                                    <td>{data.Title}</td>
                                    <th>{data.imdbRating}</th>
                                    <th>{data.Year}</th>
                                    <th>{data.Rated}</th>
                                </tr>
                            )
                        }) : <p>Loading!</p>
                    }
                </tbody>
            </table>
        </div>
    )
}
