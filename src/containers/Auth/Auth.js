import React from 'react';
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css';

class Auth extends React.Component {
    render() {
        return (
            <div className={classes.auth}>
                <div className={classes.quizWrapper}>
                    <h1>Auth</h1>
                    <div className={classes.content}>
                        <form action="">
                            <input type="text"/>
                            <input type="text"/>
                            <Button
                                caption="Sign IN"
                                onClickfunction={this.handleSignIN}
                            />
                            <Button
                                type="primary"
                                caption="Sign UP"
                                onClickfunction={this.handleSignUP}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;