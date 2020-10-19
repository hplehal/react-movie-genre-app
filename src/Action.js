import React, { useEffect, useState } from 'react';


export const Action = ({ genre }) => {
    const [datas, setDatas] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/${genre}`);
            const movies = await response.json();
            console.log(movies);
            setDatas(movies);
        }
        fetchData();
    }, [genre]);
    return (
        <div>
            <h1>{genre.toUpperCase()}</h1>

            <section className="movieList">
                {
                    datas ? datas.map((data) => {
                        return (
                            <div className="movieTemplate" key={data.imdbID}>
                                <h1>{data.Title}</h1>
                                <img alt={`Poster of ${data.Title}`} src={data.Poster} />
                                <p>{data.Year}</p>
                                <p>{data.Plot}</p>
                            </div>
                        )
                    }) : <h1>Welcome!</h1>
                }
            </section>
        </div>
    )
}
