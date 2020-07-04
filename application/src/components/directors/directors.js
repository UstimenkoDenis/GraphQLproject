import React, {Component} from 'react';
import './directors.css';

const directors = [
    { id: 1, name: 'Quentin Tarantino', age: 55, movies: [ { name: 'Movie 1' }, { name: 'Movie 2' } ] },
    { id: 2, name: 'Guy Ritchie', age: 50, movies: [ { name: 'Movie 1' }, { name: 'Movie 2' } ] }
];

export default class Directors extends Component {
    render() {
        return (
            <div className="directors">
                <h1>Directors</h1>
                <ul>
                    {   directors.map((director, i) => {
                            return ( <li key={director.id}>{director.name}</li>)
                        }) }
                </ul>
            </div>
        )              
    }
}