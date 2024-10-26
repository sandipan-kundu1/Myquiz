import React from "react"

export default function Joke(props){
    return(
        <div>      
        {props.setup && <h3>setup: {props.setup}</h3>}   
        <p>Punchline: {props.punchline}</p>
        <p>UP={props.upvotes}</p>
        <p>DOWN={props.downvotes}</p>
        
        <hr/>
        </div>
    )
}//here if props.setup exists true, then go for next && part, otherwise not
//<h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>     also this can be done