import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
           <div className={styles.button}><Link to='/movies' style={{ textDecoration: 'none' }}>Movies</Link></div>
           <div className={styles.button}><Link to='/directors' style={{ textDecoration: 'none' }}>Directors</Link></div>
            <div className={styles.button}><Link to='/movieform' style={{ textDecoration: 'none' }}>Add movies</Link></div>
            <div className={styles.button}><Link to='/directorform' style={{ textDecoration: 'none' }}>Add directors</Link></div>
        </div>
    )
}
export default Header;