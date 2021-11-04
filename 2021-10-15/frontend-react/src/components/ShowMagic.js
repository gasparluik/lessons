import { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import Age from "./Age";
import '../App.css';

function ShowMagic() {
    const [magicNumber, setMagicNumber] = useState(0)
    const [show, setShow] = useState(true)
    const [age, setAge] = useState(false)

    return (
        <div className="App">
        { show && <h1>{ magicNumber }</h1> }
        <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber}
            show={show}
            setShow={setShow}
        />
        <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber} 
            amount={5}
            show={show}
            setShow={setShow}
        />
        <Fun 
            magicNumber={magicNumber} 
            setMagicNumber={setMagicNumber} 
            amount={25}
            show={show}
            setShow={setShow}
        />
        <Greeting name="Gaspar" age="21"/>

        <h3>What is your age?</h3>
        <form onSubmit={(e)=>{
            e.preventDefault()
            setAge(e.target[0].value)
        }}>
            <input type= "text" name="age" />
            <input type="submit" />
        </form>
        {age && <Age age={age} />}
            
        </div>
    );
}

export default ShowMagic;
