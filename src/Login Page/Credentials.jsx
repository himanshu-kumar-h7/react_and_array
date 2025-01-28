import React, { useEffect, useRef } from "react"
import { useState } from "react"

const Credentials = () => {
    const[id,setID] = useState(null)

    const userNameRef = useRef(null)
    useEffect(() => {
console.log("This is use effect")
document.title ='Login'

    userNameRef.current.focus();
  
    }
    ,[])

    const handleChange = () => {
        setID(userNameRef.current.value)

    }
    return(
        <div>
            <h1>Welcome to Login Page</h1>
            <div>
                <input type="text" placeholder="User ID" ref={userNameRef} onChange={handleChange}>

                </input>
                <input type="password" placeholder="Password"></input>
            </div>
            <div>
                <br></br>
                <button >Login</button>
                
            </div>
        </div>
    )
}

export default Credentials