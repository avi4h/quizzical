import React from 'react'
import Option from './Option.jsx'

export default function Question(props) {
    return (
        <div className='question'>
            <h3>{props.question}</h3>
            <ul>
                <Option 
                    text={props.option1.text} 
                    hold={props.option1.hold} 
                    opId={props.option1.opId}
                    correct={props.option1.correct}
                    qId={props.qId}
                    handleClick={props.handleClick}
                    checked={props.checked}
                />
                <Option 
                    text={props.option2.text} 
                    hold={props.option2.hold} 
                    opId={props.option2.opId}
                    correct={props.option2.correct}
                    qId={props.qId}
                    handleClick={props.handleClick}
                    checked={props.checked}
                />
                <Option 
                    text={props.option3.text} 
                    hold={props.option3.hold} 
                    opId={props.option3.opId}
                    correct={props.option3.correct}
                    qId={props.qId}
                    handleClick={props.handleClick}
                    checked={props.checked}
                />
                <Option 
                    text={props.option4.text} 
                    hold={props.option4.hold} 
                    opId={props.option4.opId}
                    correct={props.option4.correct}
                    qId={props.qId}
                    handleClick={props.handleClick}
                    checked={props.checked}
                />
                
            </ul>
            { props.num!==4 && <hr />}
        </div>
    )
}