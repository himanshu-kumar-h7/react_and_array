import React, { useState } from "react";

const Child = (props) => {

    const[disable, setDisable] = useState(false)

   const obj = props.value
   const setter = props.setter

   const handAdd =() => {
    console.log(obj.age, "hi")
    setter(obj.age + 15)
    setDisable(true)
    setTimeout(() => {
        setDisable(false)
    },2000)
    
   }

  

    return(
        <>
        <button onClick={handAdd} disabled={disable}>Click to add 15 to current age i.e {obj.age}</button>
        </>
    )
}

export default Child