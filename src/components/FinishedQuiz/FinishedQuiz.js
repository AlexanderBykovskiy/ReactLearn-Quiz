import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({quizList, results, totalQuestion}) => {
    return(
        <div className={classes.finishedquiz}>
            <ul>
                {quizList.map((question, id) => {
                    return(
                        <li>{question[id]}</li>
                    )
                })}
                <li><i className={'fa fa-check success ' + classes.success}></i><strong>1. </strong>Question 1</li>
                <li><i className={'fa fa-times ' + classes.error}></i><strong>2. </strong>Question 2</li>
                <li><i className={'fa fa-times'}></i><strong>3. </strong>Question 3</li>
            </ul>
            <p>Right 1/{totalQuestion}</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    );
}

export default FinishedQuiz;