import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
           <div className="button"><Link to='/movies' style={{textDecoration: 'none'}}>Movies</Link></div>
           <div className="button"><Link to='/directors' style={{textDecoration: 'none'}}>Directors</Link></div>
            <div className="button"><Link to='/movieform' style={{textDecoration: 'none'}}>Add movies</Link></div>
            <div className="button"><Link to='/directorform' style={{textDecoration: 'none'}}>Add directors</Link></div>
        </div>
    )
}
export default Header;