import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="button"><Link to='/movies' style={{textDecoration: 'none'}}>Фильмы</Link></div>
           <div className="button"><Link to='/directors' style={{textDecoration: 'none'}}>Режисcёры</Link></div>
            <div className="button"><Link to='/addFilm' style={{textDecoration: 'none'}}>Добавить фильм</Link></div>
            <div className="button"><Link to='/addMovie' style={{textDecoration: 'none'}}>Добавить режисcёра</Link></div>
        </div>
    )
}
export default Header;