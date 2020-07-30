import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styles from './UpdateDirectorsDialog.module.css'

import withHocs from './UpdateDirectorsDialogHOC'

class UpdateDirectorsDialog extends Component {

    state = {
            name: '',
            age: 0
    } 
        
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,            
        })
    }

    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value.replace(/[^0-9]/ig,'')            
        })
    } 
    handleUpdate = () => {
       const {id, onClose, updateDirector} = this.props
       updateDirector({id, name: this.state.name, age: Number(this.state.age)})
       onClose()       
    }
    
    componentWillReceiveProps(newProps) {
        const {name, age} = newProps
        this.setState({
            name,
            age
        })
    }

    render() {  
        const {isUpdateOpen, onClose} = this.props      
        return (
            <>
                { isUpdateOpen &&
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalWindow}>
                            <div className={styles.modalHeader}>
                                <div className={styles.modalTitle}>Update Director</div>                            
                            </div>
                            <div className={styles.modalBody}>
                                    <label>
                                        Name
                                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                                    </label>
                                    <label>
                                        Age
                                        <input type="text"value={this.state.age} onChange={this.handleChangeAge}/>
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

UpdateDirectorsDialog.propTypes = {
    isUpdateOpen: PropTypes.bool,
    title: PropTypes.string,    
    onClose: PropTypes.func,
    age: PropTypes.number   
};

UpdateDirectorsDialog.defaultProps = {
    title: 'Modal title',   
    isUpdateOpen: false, 
    onClose: () => {},
    age: 0   
};
export default withHocs(UpdateDirectorsDialog)
