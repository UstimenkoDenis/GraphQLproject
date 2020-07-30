import React, {Component} from 'react';
import withHocs from './directorsHOC';
import styles from './Directors.module.css';
import DirectorsDialog from '../directorsDialog'
import UpdateDirectorsDialog from '../updateDirectorsDialog'
import DirectorsSearch from '../directorsSearch'
class Directors extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isUpdateOpen: false,
            currentDirectorId: '',
            currentDirectorName: '',
            currentDirectorAge: 0
        }
    }
    
    handleClose = () => {        
        this.setState({ isOpen: false, isUpdateOpen: false })
    }

    render() {
       const { data = {} } = this.props;
       const { directors = [] } = data;

        return (
            <div className={styles.directors}>   
                <DirectorsSearch/>            
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
                                                > X </div>
                                            </td> 
                                            <td>
                                                <div className={styles.edit}
                                                        onClick={ () => {
                                                            this.setState({
                                                                isUpdateOpen: true,
                                                                currentDirectorName: director.name,
                                                                currentDirectorId: director.id,
                                                                currentDirectorAge: director.age
                                                            })
                                                        }} 
                                                > E </div>
                                            </td>                                             
                                        </tr>
                                    )
                                }) }
                    </tbody>                    
                </table>
                <DirectorsDialog 
                    id={this.state.currentDirectorId}
                    name={this.state.currentDirectorName}
                    isOpen={this.state.isOpen}
                    onClose={this.handleClose}
                > 
                <p>Do you really want to delete?</p> 
                </DirectorsDialog> 
                <UpdateDirectorsDialog 
                    id={this.state.currentDirectorId}
                    name={this.state.currentDirectorName}
                    age={this.state.currentDirectorAge}
                    isUpdateOpen={this.state.isUpdateOpen}
                    onClose={this.handleClose}
                />                  
            </div>
        )              
    }
}

export default withHocs(Directors);