import React from 'react';
import './Select.css'

function Select({
    cypherOptionList,
    handleSelectChange
}) {
    return (
        <select className="cypher-select" defaultValue={'DEFAULT'} onChange={handleSelectChange}>
          <option disabled value="DEFAULT">Select a cypher</option>
          {
            cypherOptionList.map((cypherOption) => 
            <option className="cypher-option" key={cypherOption.value} value={cypherOption.value}>{cypherOption.label}</option>)
          }
        </select>
    )

}

export default Select;