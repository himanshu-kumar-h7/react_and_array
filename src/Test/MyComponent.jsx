import React, { useState } from "react";

const MyComponent = () => {
    const [input, setInput] = useState('')
    const [show, setShow] = useState(false)
    const [showScreen, setShowScreen] = useState('')

    
    const handeChange = (e) => {
        setInput(e.target.value)
    }
    const handleShow = () => {
        setShowScreen(input)
        setInput('')
    }
    return(
        <>
        <input
        type="text"
        value={input}
        onChange={handeChange}
        
        />
        <button onClick={handleShow}>Show</button>
        
        <p>{showScreen}</p>
        <p>Himanshu</p>
        
        </>
    )
}
export default MyComponent