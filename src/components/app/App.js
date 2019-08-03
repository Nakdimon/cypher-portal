import React, { useState } from 'react';
import './App.css';
import cypherOptionList from '../../assets/cypherOptionList.json'
import Select from '../select/Select'
import TextArea from '../textArea/TextArea'
import Button from '../button/Button'
import axios from 'axios';

function App() {
  const [cypher, setCypher] = useState(null)

  const [cypheredText, setCypheredText] = useState('You\'ve yet to input something...')

  const[isTextAreaDisabled, setIsTextAreaDisabled] = useState(true)
  
  const[isRequestButtonDisabled, setIsRequestButtonDisabled] = useState('disabled')

  const[text, setText] = useState('default')
  
  function handleSelectChange (event) {
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
    var noSymbolRegex = new RegExp(/^[A-Za-z ]*$/)
    if(noSymbolRegex.test(text)){
      getCypheredText()
    } else {
      setCypheredText('That\'s not a valid string :/')
    }
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
        <Select 
          cypherOptionList={cypherOptionList} 
          handleSelectChange={handleSelectChange}
        />        
        <TextArea
          isTextAreaDisabled={isTextAreaDisabled}
          handleTextAreaChange={handleTextAreaChange}
        />        
        <Button
          isRequestButtonDisabled={isRequestButtonDisabled}
          handleCypherAction={handleCypherAction}
        />        
        <h3>Cyphered Result:</h3>
        <label className="cypher-result">{cypheredText}</label>
      </header>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
