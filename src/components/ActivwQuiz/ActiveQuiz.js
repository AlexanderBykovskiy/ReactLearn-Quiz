import React from 'react';
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = () => {
    return (
        <div className={classes.activequiz}>
            <p className={classes.question}>
                <span className={classes.questionText}>
                    <strong>
                        1.
                    </strong>&nbsp;
                    Question
                </span>
                <span>
                    2/5
                </span>
            </p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default ActiveQuiz;