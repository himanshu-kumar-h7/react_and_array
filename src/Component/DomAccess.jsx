// import React, { useEffect } from "react";
// import { useRef } from "react";

// const DomAccess = () => {

//     const refContainer = useRef(null)

//     useEffect(() => {
//         refContainer.current.focus()
//     },[])
//     return(
//     <div>
//         <p>This is Dom Manipulation</p>
// <input type='text' ref={refContainer} placeholder="Start typing"></input>
        
//     </div>)
// }

// export default DomAccess


import React, { useEffect, useRef } from "react";

const Dom = () => {

    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    },[])
    return(
        <>
        <input type="text" placeholder="something" ref={ref}></input>
        </>
    )
}

export default Dom