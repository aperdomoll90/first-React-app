import React from 'react'

function Greetings(props){
    const {firstName} = props
    return(
       <p>Hello, {firstName || 'there'}!</p> 

    )
}

export default Greetings