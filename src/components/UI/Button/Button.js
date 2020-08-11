import React from 'react';
import classes from './Button.module.css';

const Button = ({caption, onClickfunction, type, disabled}) => {
    const styles = [
        classes.button,
        classes[type],
        disabled ? classes.disabled : undefined
    ];
    const disabledAttr = disabled ? 'disabled' : undefined;
    console.log(disabledAttr);
    return (
        <button
            className={styles.join(' ')}
            onClick={onClickfunction}
            disabled={disabledAttr}
        >
            {caption}
        </button>
    );
}

export default Button;