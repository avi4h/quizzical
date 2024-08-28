import React from 'react'

export default function Top(props) {
    return (
        <div className="top" >
            <h1>Trivia Challenge</h1>
            <h2>Current Score: {props.score}</h2>
            <h3>Rounds Played: {props.rounds}</h3>
        </div>
    )
}