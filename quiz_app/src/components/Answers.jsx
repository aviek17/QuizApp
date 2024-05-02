import React, { useRef } from 'react'

const Answers = ({ answers, selectedAnswers, answerState, handleSelectAnswer }) => {
    const shuffledAnswer = useRef();

    if (!shuffledAnswer.current) {
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }


    return (
        <>
            <ul id='answers'>
                {
                    shuffledAnswer.current.map(answer => {
                        const isSelected = selectedAnswers === answer;
                        let cssClass = "";
                        if (answerState === "answered" && isSelected) {
                            cssClass = "selected";
                        }
                        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                            cssClass = answerState;
                        }
                        return (<li key={answer} className='answer'>
                            <button onClick={() => { handleSelectAnswer(answer) }} className={cssClass}>{answer}</button>
                        </li>)
                    }
                    )
                }
            </ul>
        </>
    )
}

export default Answers
