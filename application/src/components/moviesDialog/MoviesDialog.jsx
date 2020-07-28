import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './MoviesDialog.module.css'

import withHocs from './MoviesDialogHOC'

class MoviesDialog extends Component {
        
    handleDelete = () => {
       const { id, onClose, deleteMovie } = this.props
       deleteMovie(id)
       onClose()
    }
    
    render() {  
        const { title, isOpen, onClose, children } = this.props      
        return (
            <>
                { isOpen &&
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalWindow}>
                            <div className={styles.modalHeader}>
                                <div className={styles.modalTitle}>{title}</div>                            
                            </div>
                            <div className={styles.modalBody}>
                                {children}
                            </div>
                            <div className={styles.modalFooter}>
                                <button style={{ marginRight: '5px' }} onClick={onClose}>Cancel</button>
                                <button onClick={this.handleDelete}>Ok</button>
                            </div>
                        </div>
                    </div>
                }            
            </>        
        )
    }

}

MoviesDialog.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,    
    onClose: PropTypes.func,    
    children: PropTypes.node
};

MoviesDialog.defaultProps = {
    title: 'Modal title',   
    isOpen: false, 
    onClose: () => {},   
    children: null,
};
export default withHocs(MoviesDialog)