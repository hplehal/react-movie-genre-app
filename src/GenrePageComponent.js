import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const GenrePageComponent = ({ genre }) => {
    const [datas, setDatas] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/${genre}`);
                const movies = await response.json();
                console.log(movies);
                setDatas(sortByRelease(movies));
            }
            catch (error) {
                console.log("ooops!", error);
            }
        }
        fetchData();
    }, [genre]);

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
    return (
        <div>
            <h1>{genre.toUpperCase()}</h1>
            <div>
                <select>
                    <option value="sortAtoZ" onChange={() => setDatas(sortAtoZ(datas))}>A-Z</option>
                    <option value="sortByRelease" onChange={() => setDatas(sortByRelease(datas))}>By Release Date</option>
                    <option value="sortByPopularity" onChange={() => setDatas(sortByPopularity(datas))}>By Votes</option>
                    <option value="sortByRatings" onChange={() => setDatas(sortByRatings(datas))}>By Ratings</option>
                </select>
            </div>
            <section className="movieList">
                {
                    datas ? datas.map((data) => {
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
        </div>
    )
}
