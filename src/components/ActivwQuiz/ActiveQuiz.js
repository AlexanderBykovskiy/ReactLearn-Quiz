import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = ({quiz, totalQuestion, answerState, handleQuestionClick}) => {
    //console.log('###ActiveQuiz###', props);
    return (
        <div className={classes.activequiz}>
            <p className={classes.question}>
                <span className={classes.questiontext}>
                    <strong>
                        {quiz.id}.
                    </strong>&nbsp;
                    {quiz.question}
                </span>
                <span>
                {quiz.id}/{totalQuestion}
                </span>
            </p>
            <AnswerList
                answers={quiz.answers}
                answerState={answerState}
                handleQuestionClick={handleQuestionClick}
            />
        </div>
    );
}

export default ActiveQuiz;