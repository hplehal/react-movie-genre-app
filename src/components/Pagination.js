import React from 'react'

const Pagination = ({ totalMovies, pageLimit, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalMovies / pageLimit); i++) {
        pageNumber.push(i);
    }

    return (
        <section className="pagination">
            <ul>
                {
                    pageNumber.length > 1 &&
                    pageNumber.map(pageNum => {
                        return (
                            <li key={pageNum} onClick={() => paginate(pageNum)}>
                                {pageNum}
                            </li>
                        )
                    })
                }
            </ul>
        </section >
    )
}

export default Pagination;