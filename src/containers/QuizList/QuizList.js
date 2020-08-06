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
                <h1>QuizList</h1>
                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>
        )
    }
}

export default QuizList;