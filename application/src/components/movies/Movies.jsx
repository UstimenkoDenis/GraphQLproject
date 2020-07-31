import React, { Component } from 'react';
import styles from './Movies.module.css';
import MoviesDialog from '../moviesDialog'
import UpdateMoviesDialog from '../updateMoviesDialog'
import withHocs from './moviesHOC';
import MoviesSearch from '../moviesSearch'

class Movies extends Component {

    state = {
            isOpen: false,
            isUpdateMovieOpen: false,
            currentMovieName: '',
            currentMovieGenre: '',
            currentMovieRate: 0,
            currentMovieId: '',
            name: ''
    }      
      
    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleClose = () => {        
        this.setState({ isOpen: false, isUpdateMovieOpen: false, })
    }
    
    handleSearch = (e) => {
        const { data } = this.props
        const { name } = this.state
        
        if(e.charCode === 13) {            
            data.fetchMore({
                variables: { name },
                updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
            });
        }
    };

    render() {
        const { data } = this.props;
        const { movies = [] } = data;
         
        return (
            <div className="movies">
                <MoviesSearch 
                    name={this.state.name} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}/>
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
                                                                currentMovieName: movie.name,
                                                                currentMovieId: movie.id,
                                                                currentMovieGenre: movie.genre,
                                                                currentMovieRate: movie.rate,
                                                                isUpdateMovieOpen: true,
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
                <UpdateMoviesDialog 
                    id={this.state.currentMovieId}
                    name={this.state.currentMovieName}
                    rate={this.state.currentMovieRate}
                    genre={this.state.currentMovieGenre}                    
                    isUpdateMovieOpen={this.state.isUpdateMovieOpen}                    
                    onClose={this.handleClose}  
                    data={this.props.data}                 
                />                                            
            </div>
        )
    }
}

export default withHocs(Movies)