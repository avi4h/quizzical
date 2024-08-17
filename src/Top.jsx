import React from 'react'

export default function Top(props) {
    return (
        <div className="top" >
            <h1>Trivia</h1>
            <h2>Score: {props.score}</h2>
            <h3>Rounds: {props.rounds}</h3>
        </div>
    )
}