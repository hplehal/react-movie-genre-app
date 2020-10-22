import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ genres }) => {
    return (
        <header>
            <nav>
                <Link to='/'>
                    <img src="https://www.inpixon.com/hubfs/INPX-Logo-II-White.svg" alt="inpixon white logo" />
                </Link>
                <ul>
                    {
                        genres.map((genre, i) => {
                            return (
                                <li key={i}>
                                    <Link to={`/${genre}`} >{genre}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
