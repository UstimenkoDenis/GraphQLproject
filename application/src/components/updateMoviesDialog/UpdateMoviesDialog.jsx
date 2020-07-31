import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './UpdateMoviesDialog.module.css'

import withHocs from './UpdateMoviesDialogHOC'

class UpdateMoviesDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            rate: 0,
            directorId: '5ef90dbae092c32eb84fe826',   
            dir: []                    
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

    handleUpdate = () => {
        
        const {id, onClose, updateMovie} = this.props
        const { name, genre, rate, directorId} = this.state
        updateMovie({ 
            id,
            name, 
            genre,
            rate: Number(rate),              
            directorId,
        })
        onClose()       
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        const {name, genre, rate, data} = newProps             
        this.setState({            
            name,
            genre,
            rate                                   
        })   
        if(data.directors.length > 0){
            this.setState({
                dir: data.directors
            })
        }
    }
    
    render() {  
        const { isUpdateMovieOpen, onClose, data = {} } = this.props   
        const { directors = [] } = data; 
        
        // console.log(directors)
        return (
            <>
                { isUpdateMovieOpen &&
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalWindow}>
                            <div className={styles.modalHeader}>
                                <div className={styles.modalTitle}>Update Movie</div>                            
                            </div>
                            <div className={styles.modalBody}>                                
                                    <label>
                                        Name
                                        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                                    </label>
                                    <label>
                                        Genre
                                        <input type="text"value={this.state.genre} onChange={this.handleChangeGenre} />
                                    </label>    
                                    <label>
                                        Rate
                                        <input type="text"value={+this.state.rate} onChange={this.handleChangeRate} />
                                    </label>   
                                    <label>
                                        Director
                                        <select onChange={this.handleChangeDirector}>
                                            {   this.state.dir.map((director, i) => {
                                                    return ( <option key={director.id} value={director.id}>{director.name}</option> )
                                                }) }
                                        </select>
                                    </label>                                                                                                                                   
                            </div>
                            <div className={styles.modalFooter}>
                                <button style={{ marginRight: '5px' }} onClick={onClose}>Cancel</button>
                                <button onClick={this.handleUpdate}>Ok</button>
                            </div>
                        </div>
                    </div>
                }            
            </>        
        )
    }

}

UpdateMoviesDialog.propTypes = {
    isUpdateMovieOpen: PropTypes.bool,
    name: PropTypes.string,    
    onClose: PropTypes.func,
    genre: PropTypes.string,
    rate: PropTypes.number,  
    directorId: PropTypes.string, 
};

UpdateMoviesDialog.defaultProps = {
    name: 'Movie',   
    isUpdateMovieOpen: false, 
    onClose: () => {},
    genre: '',
    rate: 0,
    directorId: ''   
};
export default withHocs(UpdateMoviesDialog)
