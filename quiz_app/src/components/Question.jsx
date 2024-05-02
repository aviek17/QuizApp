import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answers from './Answers'

const Question = ({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer }) => {
    return (
        <div id='questions'>
            <QuestionTimer
                timeout={10000}
                onTimeOut={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswers={selectedAnswer}
                answerState={answerState}
                handleSelectAnswer={onSelectAnswer} />
        </div>
    )
}

export default Question
