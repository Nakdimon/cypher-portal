import React, { useState } from 'react';
import './App.css';
import cypherOptionList from './cypherOptionList'
import axios from 'axios';
import _debounce from 'lodash/debounce'

function App() {
  const [cypher, setCypher] = useState(null)

  const [cypheredText, setCypheredText] = useState('You\'ve yet to input something...')

  const[isTextAreaDisabled, setIsTextAreaDisabled] = useState(true)

  const[text, setText] = useState('default')
  
  const handleSelectChange = event => {
    setIsTextAreaDisabled(false)
    setCypher(event.target.value)
  }

  const handleTextAreaChange = _debounce((value) => {    
    setText(value)
    getCypheredText();
  },500)


  const getCypheredText = () => {
    axios.get('/'+cypher+'?text=')
    .then(function (response) {
      setCypheredText(response.data)
    }).catch(function(error) {
      setCypheredText('WHOOPS! A Mishap...')
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cypher any text!</h1>
        <h3>Choose your cypher</h3>        
        <select className="cypher-select" onChange={handleSelectChange}>
          <option disabled selected>Select a cypher</option>
          {
            cypherOptionList.map((cypherOption) => 
            <option className="cypher-option" key={cypherOption.value} value={cypherOption.value}>{cypherOption.label}</option>)
          }
        </select>
        <textarea disabled={isTextAreaDisabled} className="cypher-input-text" onChange={handleTextAreaChange} placeholder="Input the text you want to cypher."></textarea>
        <h4>Cyphered Result</h4>
        <label className="cypher-result">{cypheredText}</label>
      </header>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
