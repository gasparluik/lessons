import React, { useState } from 'react'

function StateExample(){
    const [name, setName] = useState("nothing")
    return(
        <div style={ {display: "grid", placeItems: "center"} }>
            <h1>hi</h1>
            <input type="text" onChange={(event) => setName(event.target.value) }></input>
            <span>{ name }</span>
        </div>
    )
}

export default StateExample;