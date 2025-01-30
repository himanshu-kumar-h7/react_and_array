import React, { useEffect, useState } from "react";

const APICall = () => {
    const[user, setUser] = useState(null)

    useEffect(() => {
        fetch('https://api.example.com/user')
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error))
    }, [])
    return(
        <div>
            
{user ? <h1>{user.name}</h1> : <h1>Loading...</h1>}
        </div>
    )
}

export default APICall