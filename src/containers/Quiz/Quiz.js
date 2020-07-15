import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActivwQuiz/ActiveQuiz';

class Quiz extends React.Component {

    state = {
        quiz: []
    }

    render() {
        return (
            <div className={classes.quiz}>
                <div className={classes.quizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz/>
                </div>
            </div>
        );
    }

}

export default Quiz;