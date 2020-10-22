import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesData, sortMovies } from '../action/index';
import GenreHeader from '../components/GenreHeader';
import Table from '../components/Table';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

class GenrePageContainer extends Component {
    constructor() {
        super();
        this.state = {
            table: false,
            currPage: 1,
        }
    }

    componentDidMount() {
        this.props.fetchMovies(this.props.genre);
    }

    toggleTable = () => {
        this.setState({
            table: !this.state.table
        })
    }

    paginate = (num) => {
        this.setState({
            currPage: num
        })
    }

    render() {
        const { genre, pageLimit, movies, isLoading, sortMovies } = this.props;

        let lastIndex = this.state.currPage * this.props.pageLimit;
        let firstIndex = lastIndex - this.props.pageLimit;
        let currMovieContents = this.props.movies.slice(firstIndex, lastIndex);

        return (
            <div>
                {isLoading ?
                    <div>
                        < GenreHeader
                            table={this.state.table}
                            genre={genre} movies={movies}
                            handleChange={sortMovies}
                            handleClick={this.toggleTable} />
                        {
                            this.state.table ?
                                <Table movies={currMovieContents} />
                                :
                                <MovieList genre={genre} movies={currMovieContents} />
                        }
                        <Pagination
                            pageLimit={pageLimit}
                            totalMovies={movies.length}
                            paginate={this.paginate} />
                    </div > :
                    <h3>LOADING.......</h3>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies,
        isLoading: state.movies.isFetching,
        pageLimit: state.movies.pageLimit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: query => dispatch(fetchMoviesData(query)),
        sortMovies: (movies, string) => dispatch(sortMovies(movies, string))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenrePageContainer);




