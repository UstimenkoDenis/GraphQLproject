import React, {Component} from 'react';
import './directors.css';

import withHocs from './directorsHOC';

class Directors extends Component {
    render() {
       const { data={} } = this.props;
       const { directors=[] } = data;

        return (
            <div className="directors">
                {/* <h1>Directors</h1>
                <ul>
                    {   directors.map((director, i) => {
                            return ( <li key={director.id}>{director.name + " (" + director.age + " years old)"}</li>)
                        }) }
                </ul>                 */}
                 <table>
                    <caption>Directors</caption>
                    <thead>
                        <tr>
                            <td>Name</td><td>Age</td><td>Movies</td>
                        </tr>
                    </thead>
                                       
                    <tbody>
                            {directors.map((director, i) => {
                                    return ( 
                                        <tr key={director.id}>
                                            <td>{director.name}</td><td>{director.age}</td>
                                            <td>{director.movies.map((movie, j) => {
                                                    return ( <tr><td>{movie.name}</td></tr>)
                                                })}</td> 
                                        </tr>
                                    )
                                }) }
                    </tbody>                    
                </table>
            </div>
        )              
    }
}

export default withHocs(Directors);