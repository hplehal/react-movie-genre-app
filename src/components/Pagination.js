import React from 'react'

export const Pagination = ({ totalMovies, pageLimit, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / pageLimit); i++) {
        pageNumber.push(i);
    }

    return (
        <section>
            <ul>
                {
                    pageNumber.map(pageNum => {
                        return (
                            <li key={pageNum}>
                                <a href="!#" onClick={() => paginate(pageNum)}>
                                    {pageNum}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
