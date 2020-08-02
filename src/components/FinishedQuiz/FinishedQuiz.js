import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({quizList, results, totalQuestion, onRetry}) => {

    const questions = quizList.map((question, key) => {

        const styles = [
            'fa',
            results[question.id] === 'error' ? 'fa-times' : 'fa-check',
            results[question.id] === 'error' ? classes.error : classes.success
        ];

        return (
            <li key={question.id}>
                <i className={styles.join(' ')}></i>
                <strong>{key + 1}. </strong>
                {question.question}
            </li>
        );
    });

    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return(
        <div className={classes.finishedquiz}>
            <ul>
                {questions}
            </ul>
                <p>Right {successCount}/{totalQuestion}</p>
            <div>
                <button onClick={onRetry}>Repeat</button>
            </div>
        </div>
    );
}

export default FinishedQuiz;