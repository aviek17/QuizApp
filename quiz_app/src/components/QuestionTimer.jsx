import React, { useState, useEffect } from 'react'

const QuestionTimer = ({ timeout, onTimeOut }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);


    useEffect(() => {
        setTimeout(onTimeOut, timeout);
    }, [timeout, onTimeOut])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100)
    }, [])


    return (
        <progress id='question-time' max={timeout} value={remainingTime} />
    )
}

export default QuestionTimer
