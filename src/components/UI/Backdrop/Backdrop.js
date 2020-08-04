import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({isOpen, handleToggleClick}) => {

    const styles=[
        classes.backdrop
    ]

    if (isOpen) {
        styles.push(classes.open);
    }

    return(
        <div className={styles.join(' ')} onClick={handleToggleClick}></div>
    )
}

export default Backdrop;