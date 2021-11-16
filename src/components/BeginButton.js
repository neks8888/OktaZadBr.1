import React from 'react'

export default function BeginButton(props) {
    
  
    return (
        <div onClick={props.handleToggle} >
            Click me to start adding expences
        </div>
    )
}
