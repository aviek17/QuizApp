import React from 'react'
import quizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js"

const Summary = ({ userAnswers }) => {
    const skippedAnswer = userAnswers.filter((item) => item === null);
    const correctAnswer = userAnswers.filter((item, index) => item === QUESTIONS[index].answers[0]);
    const incorrectAnswer = userAnswers.filter((item, index) => item!== QUESTIONS[index].answers[0]);

    return (
        <div id='summary'>
            <img src={quizCompleteImg} alt='trophy' />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{((skippedAnswer.length/QUESTIONS.length)*100).toFixed(0)}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{((correctAnswer.length/QUESTIONS.length)*100).toFixed(0)}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{((incorrectAnswer.length/QUESTIONS.length)*100).toFixed(0)}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {
                    userAnswers.map((answer, index) => {
                        let cssClass = "user-answer";
                        if (answer === null) {
                            cssClass += " skipped";
                        }
                        else if (answer === QUESTIONS[index].answers[0]) {
                            cssClass += " correct";
                        }
                        else {
                            cssClass += " wrong";
                        }
                        return (
                            <li key={index}>
                                <h3>{index + 1}</h3>
                                <p className='question'>{QUESTIONS[index].text}</p>
                                <p className={cssClass}>{answer ?? "Skipped"}</p>
                            </li>
                        )
                    })
                }

            </ol>
        </div>
    )
}

export default Summary
