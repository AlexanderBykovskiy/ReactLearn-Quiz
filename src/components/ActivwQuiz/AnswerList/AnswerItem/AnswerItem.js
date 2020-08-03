import React from 'react';
import classes from './AnswerItem.module.css';

const AnswerItem = ({answer, id, answerState, handleQuestionClick}) => {

    const classNames = [classes.answerItem];

    if (answerState) {
        classNames.push(classes[answerState]);
    }

    return (
    <li
        className={classNames.join(' ')}
        onClick={handleQuestionClick.bind(this, id)}
        key={id}
        id={id}
    >
        {answer}
    </li>
    );
}

export default AnswerItem;