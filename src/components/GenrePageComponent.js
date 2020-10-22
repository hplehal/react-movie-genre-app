import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMoviesData } from '../action/index';
import { GenreHeader } from './GenreHeader';
import { Table } from './Table';
import { MovieList } from './MovieList';
import { Pagination } from './Pagination';


export const GenrePageComponent = ({ genre }) => {
    const [movies, setMovies] = useState(null);
    const [table, setTable] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(6);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(genre);
        // console.log(fetchMoviesData(genre));

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/${genre}`);
                const movies = await response.json();
                setMovies(sortByRelease(movies));
                setIsLoading(false);
            }
            catch (error) {
                console.log("ooops!", error);
            }
        }
        fetchData();
    }, []);

    const sortMovie = (str) => {
        let datas = [...movies];
        if ('sortAtoZ' === str) {
            setMovies(sortAtoZ(datas));
        } else if ('sortByRatings' === str) {
            setMovies(sortByRatings(datas));
        } else if ('sortByPopularity' === str) {
            setMovies(sortByPopularity(datas));
        } else if ('sortByRelease' === str) {
            setMovies(sortByRelease(datas));
        }
    }
    const sortByRelease = (movies) => {
        return movies.sort((a, b) => {
            let dateA = new Date(a.Released);
            let dateB = new Date(b.Released);
            return dateB - dateA;
        })
    }

    const sortByRatings = (movies) => {
        return movies.sort((a, b) => {
            return b.imdbRating - a.imdbRating;
        })
    };

    const sortByPopularity = (movies) => {
        return movies.sort((a, b) => {
            let votesA = parseInt(a.imdbVotes.replace(/,/g, ''), 10);
            let votesB = parseInt(b.imdbVotes.replace(/,/g, ''), 10);;
            return votesB - votesA;
        })
    }

    const sortAtoZ = (movies) => {
        return movies.sort((a, b) => {
            let titleA = a.Title.toLowerCase()
            let titleB = b.Title.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        })
    }
    const toggleTable = () => {
        setTable(!table);
    }

    const paginate = (num) => {
        setCurrPage(num)
    }

    const lastIndex = currPage * pageLimit;
    const firstIndex = lastIndex - pageLimit;
    const currMovieContents = movies && movies.slice(firstIndex, lastIndex);

    return (
        <div>
            { movies ?
                <div>
                    < GenreHeader genre={genre} handleChange={sortMovie} handleClick={toggleTable} />
                    {
                        table ? <Table movies={currMovieContents} /> : <MovieList genre={genre} movies={currMovieContents} />
                    }
                    <Pagination pageLimit={pageLimit} totalMovies={movies.length} paginate={paginate} />
                </div > :
                <h3>LOADING.......</h3>}
        </div>


    )
}

// const mapStateToProps = (state, props) => {
//     return {
//         props,
//         genre: props.genre,
//         movies: state.movies,
//         isLoading: state.isFetching
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchMovies: query => dispatch(fetchMoviesData(query))
//     }
// }

// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(GenrePageComponent));
