import React, {Component} from 'react';
import './directors.css';

import withHocs from './directorsHOC';

class Directors extends Component {
    render() {
       const { data={} } = this.props;
       const { directors=[] } = data;

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

export default withHocs(Directors);