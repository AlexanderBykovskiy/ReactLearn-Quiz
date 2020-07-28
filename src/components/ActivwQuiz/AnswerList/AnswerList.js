import React from 'react';
import classes from './AnswerList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = ({answers, answerState, handleQuestionClick}) => {
    const answerItems = answers.map((item) => {
        return <AnswerItem
            answer={item.answer}
            id={item.id}
            key={item.id}
            answerState={answerState ? answerState[item.id] : null}
            handleQuestionClick={handleQuestionClick}
        />
    });
    return (
        <ul className={classes.answerlist}>
            {answerItems}
        </ul>
    );
}

export default AnswerList;