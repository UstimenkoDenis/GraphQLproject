import React, { Component } from 'react'

import withHocs from './directorsFormHoc'
import { addDirectorMutation } from './mutations'
import styles from './DirectorForm.module.css'

class DirectorForm extends Component {
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
            age: event.target.value.replace(/[^0-9]/ig,''),            
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { addDirector } = this.props;
        console.log(this.props);
        addDirector({ 
            name: this.state.name, 
            age: Number(this.state.age), 
        });       
    }

    render() {
        return (
            <form className={ styles.form } onSubmit={this.handleSubmit}>
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
export default withHocs(DirectorForm);
