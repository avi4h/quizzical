import React from 'react'

export default function Option(props) {
    let styles = {}
    if(props.checked){
        if(props.correct){
            if(props.hold){
                styles = { 
                    borderColor: "rgba(148, 215, 162, 1)", 
                    backgroundColor: "rgba(148, 215, 162, 1)",
                    cursor: "unset"
                }
            }
            else{
                styles = { 
                    borderColor: "rgba(148, 215, 162, 1)", 
                    backgroundColor: "rgba(148, 215, 162, 1)",
                    opacity: "0.5",
                    cursor: "unset"
                }
            }
        }
        else{
            if(props.hold){
                styles = { 
                    borderColor: "rgba(248, 188, 188, 1)", 
                    backgroundColor: "rgba(248, 188, 188, 1)",
                    opacity: "0.5",
                    cursor: "unset"
                }
            }
            else{
                styles = { 
                    borderColor: "rgba(77, 91, 158, 1)", 
                    backgroundColor: "rgba(245, 247, 251, 1)",
                    opacity: "0.5",
                    cursor: "unset"
                }
            }
        }
    }
    else{
        if(props.hold){
            styles = { 
                borderColor: "rgba(214, 219, 245, 1)", 
                backgroundColor: "rgba(214, 219, 245, 1)"
            }
        }
        else{
            styles = { 
                borderColor: "rgba(77, 91, 158, 1)", 
                backgroundColor: "rgba(245, 247, 251, 1)"
            }
        }
    }

    return (
        <li 
            style={styles} 
            onClick={() => props.handleClick(props.qId, props.opId)}
        >
            {props.text}
        </li>
    )
}