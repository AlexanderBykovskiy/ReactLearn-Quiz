import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';

class Auth extends React.Component {

    handleSignIN = (e) => {

    }

    handleSignUP = (e) => {
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={classes.auth}>
                <div className={classes.quizWrapper}>
                    <h1>Auth</h1>
                    <div className={classes.content}>
                        <form onSubmit={this.handleSubmit}>
                            <Input type="text" label="Email" placeholder="Login"/>
                            <Input type="password" label="Password" placeholder="Password"/>
                            <div className={classes.buttons}>
                                <Button
                                    caption="Sign IN"
                                    onClickfunction={this.handleSignIN}
                                />
                                <Button
                                    type="primary"
                                    caption="Sign UP"
                                    onClickfunction={this.handleSignUP}
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