import React, { useState, useCallback } from 'react'
import QUESTIONS from "../questions.js"
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevSelectedAnswers) => {
            return [...prevSelectedAnswers, selectedAnswer];
        })
    }, [])

    const handleSkipAnswers = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return (
            <div id='summary'>
                <img src={quizCompleteImg} />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='questions'>
                <QuestionTimer timeout={10000} onTimeOut={handleSkipAnswers} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {
                        shuffledAnswer.map(answer =>
                            <li key={answer} className='answer'>
                                <button onClick={() => { handleSelectAnswer(answer) }}>{answer}</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz
