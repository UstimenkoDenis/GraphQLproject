import React, { Component } from 'react';
import './movieForm.css';

export default class MovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            rate: '',
            director: '',
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
            rate: event.target.value,            
        })
    }

    handleChangeDirector = (event) => {
        this.setState({
            director: event.target.value,            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    
    render() {
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
                    <input type="text"value={this.state.director} onChange={this.handleChangeDirector}/>
                </label>          
                <input type="submit" value="Add"/>
            </form>
        )
    }    
}
