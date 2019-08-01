import React from 'react';
import './App.css';
import cypherOptionList from './cypherOptionList'
// import axios from 'axios';
// import _debounce from 'lodash/debounce'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cypher any text!</h1>
        <h3>Choose your cypher</h3>        
        <select className="cypher-select">
          <option disabled selected>Select a cypher</option>
          {cypherOptionList.map((cypherOption) => 
            <option className="cypher-option" key={cypherOption.value} value={cypherOption.value}>{cypherOption.label}</option>
           )
          }
        </select>
        <textarea className="cypher-input-text" placeholder="Input the text you want to cypher."></textarea>
        <h4>Cyphered Result</h4>
        <label className="cypher-result">result</label>
      </header>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
