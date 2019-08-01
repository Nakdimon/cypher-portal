import React, { useState } from 'react';
import './App.css';
import cypherOptionList from '../assets/cypherOptionList.json'
import axios from 'axios';

function App() {
  const [cypher, setCypher] = useState(null)

  const [cypheredText, setCypheredText] = useState('You\'ve yet to input something...')

  const[isTextAreaDisabled, setIsTextAreaDisabled] = useState(true)
  
  const[isRequestButtonDisabled, setIsRequestButtonDisabled] = useState('disabled')

  const[text, setText] = useState('default')
  
  function handleSelectChange (event) {
    console.log(event.target.value)
    setIsTextAreaDisabled(false)
    setCypher(event.target.value)
  }

  function handleTextAreaChange (event) {
    if(event.target.value === '') {
      setCypheredText('Dont\'t you want to cypher something? :/')
      setIsRequestButtonDisabled('disabled')
    } else {
      setText(event.target.value)
      setIsRequestButtonDisabled('')
    }
  }

  function handleCypherAction (event) {
    getCypheredText()
  }

  const getCypheredText = () => {
    axios.get('/'+cypher+'?text='+text)
    .then(function (response) {
      setCypheredText(response.data)
    }).catch(function(error) {
      setCypheredText('WHOOPS! A Mishap...')
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="cypher-h1">Cypher any text!</h1>
        <h3 className="cypher-h3">Choose your cypher</h3>        
        <select className="cypher-select" onChange={handleSelectChange}>
          <option disabled selected>Select a cypher</option>
          {
            cypherOptionList.map((cypherOption) => 
            <option className="cypher-option" key={cypherOption.value} value={cypherOption.value}>{cypherOption.label}</option>)
          }
        </select>
        <textarea disabled={isTextAreaDisabled} className="cypher-input-text" onChange={handleTextAreaChange} placeholder="Input the text you want to cypher."></textarea>
        <div className="button_cont" align="center"><a className={'cypher-button'+' '+isRequestButtonDisabled} onClick={handleCypherAction}>Cypher Text!</a></div>
        <h3>Cyphered Result:</h3>
        <label className="cypher-result">{cypheredText}</label>
      </header>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
