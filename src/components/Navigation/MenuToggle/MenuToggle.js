import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = ({isOpen, handleToggleClick}) => {

    const styles = [
        classes.menutoggle,
        'fa'
    ]
    if (isOpen) {
        styles.push('fa-times');
        styles.push(classes.open);
    } else {
        styles.push('fa-bars');
    }

    return (
        <i
            className={styles.join(' ')}
            onClick={handleToggleClick}
        />
    );
}

export default MenuToggle;