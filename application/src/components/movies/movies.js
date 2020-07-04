import React, {Component} from 'react';
import './movies.css';

const movies = [
    { id: 1, name: 'Pulp Fiction', genre: 'Crime', rate: 10, director: { name: 'Quentin Tarantino' }, watched: true },
    { id: 2, name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-comedy', rate: 9, director: { name: 'Guy Ritchie' }, watched: false },
  ];

export default class Movies extends Component {
    render() {
        return (
            <div className="movies">
                <h1>Movies</h1>
                <ul>
                    {   movies.map((movie, i) => {
                            return ( <li key={movie.id}>{movie.name}</li>)
                        }) }
                </ul>
            </div>
        )
    }
}