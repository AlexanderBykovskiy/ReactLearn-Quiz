import React from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';

class QuizList extends React.Component {

    renderQuizes() {
        return [1, 2, 3].map((item, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={'/quiz/'+ item}
                    >
                        Test {item}
                    </NavLink>
                </li>
            );
        });
    }

    render() {
        return (
            <div className={classes.quizlist}>
                <div className={classes.quizWrapper}>
                    <h1>Select your Quiz</h1>
                    <ol>
                        {this.renderQuizes()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default QuizList;