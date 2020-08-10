import React from 'react';
import classes from './Input.module.css';

function isValid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
}

const Input = ({label, type, placeholder, value, onChange, errorMessage, ...props}) => {
    const styles = [
        classes.input
    ];

    const htmlFor = `${type}-${Math.random()}`;

    return(
        <div className={styles.join(' ')}>
            {label ? <label className={classes.label} htmlFor={htmlFor}>{label}</label> : null}
            <input
                id={htmlFor}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            { (isValid(props) && errorMessage) ? <div className={classes.errormessage}>{errorMessage}</div> : null}
        </div>
    )
}

export default Input;