import React from 'react'

export default function End(props) {
    return (
        <div className='end'>
            { props.checked && <p>You have {props.score}/5 correct answers</p> }
            <button onClick={props.handleClick}>{ props.checked ? "Play Again" : "Check"}</button>
        </div>
    )
}