import React, { Component } from 'react';
import styles from './Movies.module.css';
import MoviesDialog from '../moviesDialog'
import withHocs from './moviesHOC';

class Movies extends Component {
    state = {
        isOpen: false,
        currentMovieName: '',
        currentMovieId: ''
    }    
    handleClose = () => {        
        this.setState({ isOpen: false })
    }
   
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
                                            <tr key={movie.id}>
                                                <td>{movie.name}</td>
                                                <td>{movie.genre}</td>
                                                <td>{movie.director.name}</td>
                                                <td>{movie.rate}</td>
                                                <td className= {styles.delete}
                                                    onClick={ () => {
                                                        return (                                                            
                                                            this.setState({ 
                                                                isOpen: true,
                                                                currentMovieName: movie.name,
                                                                currentMovieId: movie.id
                                                            })                                                           
                                                        )}
                                                    }
                                                > Delete </td> 
                                                <td className= {styles.edit}
                                                    onClick={ () => {
                                                        return (                                                            
                                                            this.setState({ 
                                                                isOpen: true,
                                                                currentMovieName: movie.name,
                                                                currentMovieId: movie.id
                                                            })                                                           
                                                        )}
                                                    }
                                                > Edit </td>                                                       
                                            </tr>
                                        )
                                }) }
                    </tbody>                    
                </table>     
                <MoviesDialog 
                    id={this.state.currentMovieId}
                    title={this.state.currentMovieName}
                    isOpen={this.state.isOpen}
                    onClose={this.handleClose}                   
                > 
                <p>Do you really want to delete?</p> 
                </MoviesDialog>             
            </div>
        )
    }
}

export default withHocs(Movies)