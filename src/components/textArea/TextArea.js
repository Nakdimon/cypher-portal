import React from 'react';
import './TextArea.css'

function TextArea({
    isTextAreaDisabled,
    handleTextAreaChange
}) {
    return (
        <textarea disabled={isTextAreaDisabled} className="cypher-input-text" onChange={handleTextAreaChange} placeholder="Input the text you want to cypher."></textarea>
    )

}

export default TextArea;