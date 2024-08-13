import React from 'react'
import Question from "./Question.jsx"

export default function Quiz(props) {
    const questionsMarkup = props.questions.map((quest) => {
        return (
            <Question 
                question={quest.question} 
                option1={quest.option1}
                option2={quest.option2}
                option3={quest.option3}
                option4={quest.option4}
                qId={quest.qId}
                handleClick={props.handleClick}
                checked={props.checked}
                num={quest.num}
            />
        )
    })

    return (
        <div className='quiz'>
            {...questionsMarkup}
        </div>
    )
}