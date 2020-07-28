import React, {Component} from 'react';
import withHocs from './directorsHOC';
import styles from './Directors.module.css';
import DirectorsDialog from '../directorsDialog'

class Directors extends Component {
    state = {
        isOpen: false,
        currentDirectorId: '',
        currentDirectorName: ''
    }
    handleClose = () => {        
        this.setState({ isOpen: false })
    }

    render() {
       const { data = {} } = this.props;
       const { directors = [] } = data;

        return (
            <div className={styles.directors}>               
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
                                                <div className={styles.delete}
                                                     onClick={ () => {
                                                        this.setState({
                                                            isOpen: true,
                                                            currentDirectorName: director.name,
                                                            currentDirectorId: director.id
                                                        })
                                                     }} 
                                                >
                                                    X
                                                </div>
                                            </td>                                              
                                        </tr>
                                    )
                                }) }
                    </tbody>                    
                </table>
                <DirectorsDialog 
                    id={this.state.currentDirectorId}
                    title={this.state.currentDirectorName}
                    isOpen={this.state.isOpen}
                    onClose={this.handleClose}
                > 
                <p>Do you really want to delete?</p> 
                </DirectorsDialog> 
            </div>
        )              
    }
}

export default withHocs(Directors);