import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActivwQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends React.Component {

    state = {
        appName: 'Quiz',
        activeQuestion: 1,
        quiz: [
            {
                id: 1,
                question: 'My question 1',
                answers: [
                    { id: 1, answer: 'answer 1' },
                    { id: 2, answer: 'answer 2' },
                    { id: 3, answer: 'answer 3*' },
                    { id: 4, answer: 'answer 4' }
                ],
                rightAnswer: 3
            },
            {
                id: 2,
                question: 'My question 2',
                answers: [
                    { id: 1, answer: 'answer 1*' },
                    { id: 2, answer: 'answer 2' },
                    { id: 3, answer: 'answer 3' }
                ],
                rightAnswer: 1
            }
        ],
        answerState: null,
        isFinished: false,
        results: {}
    }

    handleOnRetry = () => {
        this.setState({
            activeQuestion: 1,
            answerState: null,
            isFinished: false,
            results: {}
        });
    }

    handleQuestionClick = (id) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];

            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        const questionObj = this.state.quiz[this.state.activeQuestion - 1];
        const results = this.state.results;

        if (id === questionObj.rightAnswer) {

            console.log('### Right answer ###');

            if (!results[questionObj.id]) {
                results[questionObj.id] = 'success';
            }

            this.setState({
                answerState: {
                    [id]: 'success'
                }
            });

            const timeout = window.setTimeout(() => {

                if (!this.finished()) {

                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });

                } else {
                    console.log('### Finished ###');
                    this.setState({
                        isFinished: true
                    });
                }

                window.clearTimeout(timeout);
            }, 500);

        } else {
            results[questionObj.id] = 'error';
            this.setState({
                answerState: {
                    [id]: 'error'
                },
                results: results
            });
            console.log('### Wrong answer ###');
        }

    }

    finished = () => {
        if (this.state.activeQuestion >= this.state.quiz.length) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className={classes.quiz} >
                <div className={classes.quizWrapper}>
                    <h1>{this.state.appName}</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                quizList={this.state.quiz}
                                results={this.state.results}
                                totalQuestion={this.state.quiz.length}
                                onRetry={this.handleOnRetry}
                            />
                            : <ActiveQuiz
                                quiz={this.state.quiz[this.state.activeQuestion - 1]}
                                totalQuestion={this.state.quiz.length}
                                handleQuestionClick={this.handleQuestionClick}
                                answerState={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    }

}

export default Quiz;