import React, {Component} from 'react';
import './movies.css';

import withHocs from './moviesHOC';

class Movies extends Component {
    render() {
        const { data } = this.props;
        const { movies = [] } = data;
         
        return (
            <div className="movies">
                <h1>Movies</h1>
                <ul>
                    {   movies.map((movie, i) => {
                            return ( <li key={movie.id}>{movie.name +"  ( "+ movie.genre + ", Rate : " + movie.rate + ", director: " + movie.director.name + " )"}</li>)
                        }) }
                </ul>
            </div>
        )
    }
}

export default withHocs(Movies)