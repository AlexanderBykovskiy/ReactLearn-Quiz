import React from 'react';
import classes from './Button.module.css';

const Button = ({caption, onClickfunction, type, disabled}) => {
    const styles = [
        classes.button,
        classes[type]
    ];
    return (
        <button
            className={styles.join(' ')}
            onClick={onClickfunction}
            disabled={disabled}
        >
            {caption}
        </button>
    );
}

export default Button;