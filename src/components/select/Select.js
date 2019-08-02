import React from 'react';
import './Select.css'

function Select({
    cypherOptionList,
    handleSelectChange
}) {
    return (
        <select className="cypher-select" onChange={handleSelectChange}>
          <option disabled selected>Select a cypher</option>
          {
            cypherOptionList.map((cypherOption) => 
            <option className="cypher-option" key={cypherOption.value} value={cypherOption.value}>{cypherOption.label}</option>)
          }
        </select>
    )

}

export default Select;