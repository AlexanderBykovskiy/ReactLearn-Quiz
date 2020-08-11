import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends React.Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                placeholder: 'Input your email address',
                errorMessage: 'Incorrect email address',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                placeholder: 'Input password',
                errorMessage: 'Incorrect password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    handleSignIN = (e) => {
        console.log('###', 'sign in');
    }

    handleSignUP = (e) => {
        console.log('###', 'sign up');
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    validateControl(value, validation) {

        if(!validation) {
            return true;
        }

        let isValid = true;

        if(validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(validation.email) {
            isValid = validateEmail(value) && isValid;
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;

    }

    handleOnChange = (e, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};
        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;
        Object.keys(formControls).forEach((name) => {
            isFormValid = formControls[name].valid && isFormValid;
        })

        this.setState({
            formControls,
            isFormValid
        });
    }

    renderInputs() {
        const inputs = Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    label={control.label}
                    placeholder={control.placeholder}
                    errorMessage={control.errorMessage}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={(e) => {this.handleOnChange(e, controlName)}}
                />
            )
        });
        return inputs;
    }

    render() {
        return (
            <div className={classes.auth}>
                <div className={classes.quizWrapper}>
                    <h1>Auth</h1>
                    <div className={classes.content}>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInputs()}
                            <div className={classes.buttons}>
                                <Button
                                    caption="Sign IN"
                                    onClickfunction={this.handleSignIN}
                                    disabled={!this.state.isFormValid}
                                />
                                <Button
                                    type="primary"
                                    caption="Sign UP"
                                    onClickfunction={this.handleSignUP}
                                    disabled={!this.state.isFormValid}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;