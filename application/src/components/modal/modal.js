import React from 'react';
import PropTypes from 'prop-types'
import styles from './Modal.module.css'


const Modal = ({
    title, isOpen, onCancel, onSubmit, children
}) => {
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
                            <button style={{ marginRight: '5px' }} onClick={onCancel}>Cancel</button>
                            <button onClick={onSubmit}>Ok</button>
                        </div>
                    </div>
                </div>
            }            
        </>        
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};

export default Modal