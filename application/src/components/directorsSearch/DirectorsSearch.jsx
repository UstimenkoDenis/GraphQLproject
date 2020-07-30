import React, { Component } from 'react'
import styles from './DirectorSearch.module.css'

export default class DirectorsSearch extends Component {

    render() {
        const { name, handleChange} = this.props
        return (
            <>
                <input 
                    className={styles.input} 
                    type="text" 
                    value={name} 
                    placeholder="Search..."
                    onChange={handleChange}></input>
            </>
        )
    }
}