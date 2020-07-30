import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './UpdateMoviesDialog.module.css'

import withHocs from './UpdateMoviesDialogHOC'

class UpdateMoviesDialog extends Component {
              
    state = {
            name: '',
            genre: '',
            rate: 0,
            directorId: ''
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
        updateMovie({ 
            id,
            name: this.state.name, 
            genre: this.state.genre,
            rate: Number(this.state.rate),              
            directorId: this.state.directorId,
        })
        onClose()       
    }
    
    render() {  
        const { isUpdateMovieOpen, onClose, data = {}} = this.props   
        const { directors = [] } = data;     
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
                                        <select value={this.state.director} onChange={this.handleChangeDirector}>
                                            {   directors.map((director, i) => {
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
