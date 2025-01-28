import React from "react";

const Memoize = React.memo(({name,aadhar}) => {
    console.log("I am going to Optimise the behavior of Child component")
    return(
        <div>
        
        <p>My name is {name} and aadhar number is {aadhar}</p>
        </div>
    )
})

export default Memoize;