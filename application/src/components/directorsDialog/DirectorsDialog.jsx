import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './DirectorsDialog.module.css'

import withHocs from './DirectorsDialogHOC'
class DirectorsDialog extends Component {
       
    handleDelete = () => {
       const {id, onClose, deleteDirector} = this.props
       deleteDirector(id)
       onClose()       
    }
    
    render() {  
        const { name, isOpen, onClose, children } = this.props      
        return (
            <>
                { isOpen &&
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalWindow}>
                            <div className={styles.modalHeader}>
                                <div className={styles.modalTitle}>{name}</div>                            
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

DirectorsDialog.propTypes = {
    isOpen: PropTypes.bool,
    name: PropTypes.string,    
    onClose: PropTypes.func,    
    children: PropTypes.node
};

DirectorsDialog.defaultProps = {
    name: 'Modal title',   
    isOpen: false, 
    onClose: () => {},   
    children: null,
};
export default withHocs(DirectorsDialog)
