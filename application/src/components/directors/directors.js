import React, {Component} from 'react';
import './directors.css';

import withHocs from './directorsHOC';

class Directors extends Component {
    render() {
       const { data={} } = this.props;
       const { directors=[] } = data;

        return (
            <div className="directors">               
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
                                        <tr key={i}>
                                            <td>{director.name}</td>
                                            <td>{director.age}</td>
                                            <td>
                                                <table>
                                                   <tbody>
                                                        {director.movies.map((movie, j) => {
                                                                return ( <tr key={j}><td>{movie.name}</td></tr>)
                                                            })}
                                                   </tbody>                                                
                                                </table>  
                                            </td>                                                 
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

export default withHocs(Directors);