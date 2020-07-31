import React, { Component } from 'react';
import styles from './MovieForm.module.css'
import withHocs from './movieFormHoc';
import { addMovieMutation } from './mutations';

class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            rate: '',
            directorId: '5ef90dbae092c32eb84fe826',
        }        
    }
    
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,            
        })
    }

    handleChangeGenre = (event) => {
        this.setState({
            genre: event.target.value,            
        })
    }

    handleChangeRate = (event) => {
        this.setState({
            rate: event.target.value.replace(/[^0-9]/ig,''),            
        })
    }

    handleChangeDirector = (event) => {
        this.setState({
            directorId: event.target.value,            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { addMovie } = this.props;       
        addMovie({ 
            name: this.state.name, 
            genre: this.state.genre,
            rate: Number(this.state.rate),              
            directorId: this.state.directorId,
        });    
    }
    
    render() {
        const { data = {} } = this.props;
        const { directors = [] } = data;        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                </label>
                <label>
                    Genre
                    <input type="text"value={this.state.genre} onChange={this.handleChangeGenre}/>
                </label>    
                <label>
                    Rate
                    <input type="text"value={this.state.rate} onChange={this.handleChangeRate}/>
                </label>   
                <label>
                    Director
                    <select onChange={this.handleChangeDirector}>
                        {   directors.map((director, i) => {
                                return ( <option key={director.id} value={director.id}>{director.name}</option> )
                            }) }
                    </select>
                </label>          
                <input type="submit" value="Add"/>
            </form>
        )
    }    
}

export default withHocs(MovieForm);
