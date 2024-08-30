import React from 'react'

export default function End(props) {
    return (
        <div className='end'>
            { props.checked && <p>You have {props.score}/{props.selected} correct answers</p> }
            <button onClick={props.handleClick}>{ props.checked ? "Continue to next round" : "Check"}</button>
            {props.checked && <button onClick={props.handleAgain}>{"Play New Game"}</button>}
        </div>
    )
}