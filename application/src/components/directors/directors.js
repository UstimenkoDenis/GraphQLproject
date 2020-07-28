import React, {Component} from 'react';
import withHocs from './directorsHOC';
import styles from './Directors.module.css';
import Modal from '../modal'
class Directors extends Component {
    state = {
        isOpen: false,
        currentDirectorId: '',
        currentDirectorName: ''
    }
    
    handleCancel = () => {
        console.log('Cancelled')
        this.setState({ isOpen: false })
    }

    handleSubmit = () => {
        console.log('Submitted')
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
                <Modal 
                    title={this.state.currentDirectorName}
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleSubmit}
                > 
                <p>Do you really want to delete?</p> 
                </Modal> 
            </div>
        )              
    }
}

export default withHocs(Directors);