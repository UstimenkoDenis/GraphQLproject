import React, { Component } from 'react';
import styles from './movies.css';

import withHocs from './moviesHOC';

class Movies extends Component {
    render() {
        const { data } = this.props;
        const { movies = [] } = data;
         
        return (
            <div className="movies">
                <table>
                    <caption>Movies</caption>
                    <thead>
                        <tr>
                            <td>Name</td><td>Genre</td><td>Director</td><td>Rate</td>
                        </tr>
                    </thead>
                                       
                    <tbody>
                            { movies.map(( movie, i ) => {
                                        return ( 
                                            <tr key={ movie.id }>
                                                <td>{ movie.name }</td>
                                                <td>{ movie.genre }</td>
                                                <td>{ movie.director.name }</td>
                                                <td>{ movie.rate }</td>
                                                <td>
                                                <div className="delete">
                                                    X
                                                </div>
                                            </td>  
                                            </tr>
                                        )
                                }) }
                    </tbody>                    
                </table>
                   
                
            </div>
        )
    }
}

export default withHocs(Movies)