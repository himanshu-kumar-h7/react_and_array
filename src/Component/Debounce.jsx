import React, { useEffect, useState } from "react";

const Debounce = () => {

    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    useEffect(() => {
         const timerid = setTimeout(() => {
            fetch(`https://api.example.com/search?q=${query}`)
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => console.error("Error is ", error))
         }, 300)

         return() => clearInterval(timerid)
    },[])
    return(
        <div>
            <p>Debounce</p>
        </div>
    )
}

export default Debounce