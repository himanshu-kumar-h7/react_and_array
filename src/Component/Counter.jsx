import React from "react";
import { useState,useEffect } from "react";



const Counter = () => {

const [count, setCount] = useState(0);
useEffect(() => {
    console.log("Succefully rendered")
},[])
    return(
        <div>
            <button onClick={() => {setCount(count+1)}}>Click me</button>
            <p>You Clicked {count} times</p>
        </div>
    )
}



export default Counter;
