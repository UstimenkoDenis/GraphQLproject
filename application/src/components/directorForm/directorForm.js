import React, { Component } from 'react';
import './directorForm.css';

export default class DirectorForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
        }        
    }
    
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,            
        })
    }

    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value,            
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
                    Age
                    <input type="text"value={this.state.age} onChange={this.handleChangeAge}/>
                </label>               
                <input type="submit" value="Add"/>
            </form>
        )
    }    
}
