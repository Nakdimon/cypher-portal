import React from 'react';
import './Button.css'

function Button({
    isRequestButtonDisabled,
    handleCypherAction
}) {
    return (
        <div className="button_cont" align="center"><a className={'cypher-button'+' '+isRequestButtonDisabled} onClick={handleCypherAction}>Cypher Text!</a></div>
    )

}

export default Button;