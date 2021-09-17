import React from "react"

const Greetings = (props) => {
    const { name,age } = props

    return (
        <> 
        <h1>Greeting {name}</h1>
        <p> Greeting age {age}</p>
        </>
    )
}

export default Greetings