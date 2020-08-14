import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class QuizCreator extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleAddQuiz = () => {
        console.log('### clicked Add quiz button')
    }

    handleAddTest = () => {
        console.log('### clicked Add test button')
    }

    render() {
        return (
            <div className={classes.quizcreator}>
                <div className={classes.quizWrapper}>
                    <h1>Quiz creator</h1>
                    <div className={classes.content}>
                        <form onSubmit={this.handleSubmit}>
                            <div className={classes.question}>
                                <Input
                                    label='Question'
                                    type='text'
                                    placeholder='Input your question'
                                    value=''
                                    onChange={()=>{console.log('### onchange')}}
                                />
                            </div>
                            <div className={classes.answers}>
                                <Input
                                    label='Answer'
                                    type='text'
                                    placeholder='Input your question'
                                    value=''
                                    onChange={()=>{console.log('### onchange')}}
                                />
                                <Input
                                    label='Answer'
                                    type='text'
                                    placeholder='Input your question'
                                    value=''
                                    onChange={()=>{console.log('### onchange')}}
                                />
                                <Input
                                    label='Answer'
                                    type='text'
                                    placeholder='Input your question'
                                    value=''
                                    onChange={()=>{console.log('### onchange')}}
                                />
                            </div>
                            <div className={classes.buttons}>
                            <Button
                                caption='Add quiz'
                                disabled={false}
                                onClickfunction={this.handleAddQuiz}
                            />
                            <Button
                                caption='Create test'
                                type='primary'
                                disabled={false}
                                onClickfunction={this.handleAddTest}
                            />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizCreator;