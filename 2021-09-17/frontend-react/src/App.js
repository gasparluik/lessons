import './App.css';
import { useState } from 'react';
import Fun from './components/Fun';
import Greeting from './components/Greetings';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {show && <h1>{magicNumber}</h1>}
      <Fun
        magicNumber = {magicNumber}
        setMagicNumber={setMagicNumber}
        show = {show}
        setShow={setShow}
        />
      <Fun
      magicNumber = {magicNumber} 
      setMagicNumber={setMagicNumber} amount = {5}
      show = {show}
      setShow={setShow}
      />
      <Fun 
      magicNumber = {magicNumber} 
      setMagicNumber={setMagicNumber}
      show = {show}
      setShow={setShow}
      />
      <Greeting name = "Gaspar" age = "21"/>

    </div>
  );
}

export default App;
