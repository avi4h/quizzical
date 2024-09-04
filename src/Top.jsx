import React from 'react'

export default function Top(props) {
    return (
        <div className="top" >
            <h1>Trivia Challenge R{props.rounds}</h1>
            <h2>Current Score: {props.score}</h2>
            <h3>Current Round: {props.rounds}</h3>
        </div>
    )
}