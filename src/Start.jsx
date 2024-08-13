import React from 'react'

export default function Start(props) {
    return (
        <div className='start'>
            <h1>Quizzical</h1>
            <h2>Not just another Trivia!</h2>
            <button onClick={() => props.handleClick()} >Start Trivia</button>
        </div>
    )
}