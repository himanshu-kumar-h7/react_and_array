// import React, { useEffect, useRef, useState } from "react";

// const Test = () => {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   const handIncrease = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 500);
//   };
//   const handDecrease = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCount((prev) => prev - 1);
//     }, 500);
//   };

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <>
//       <p>This is Counter</p>
//       {count}
//       <br />
//       <button onClick={handIncrease}>Increase</button>
//       <button onClick={handDecrease}>Decrease</button>
//     </>
//   );
// };

// export default Test;

import React, { useEffect, useRef, useState } from "react"
const Test = () => {

  const[count, setCount] = useState(0)
  const myRef = useRef(null)

  const handleIncrease =() => {
  clearInterval(myRef.current)
   myRef.current = setInterval(() => {
      
     setCount((prev) => prev + 1 )
    },500)

  }
  const handleDecrease =() => {
    clearInterval(myRef.current)
    myRef.current= setInterval(() => {
   setCount((prev) => prev - 1 )
    },500) 
  }
  useEffect(() => {
    return () => {
      clearInterval(myRef.current)
    }

  },[])


  return (
   <>
   {count} <br/>
  <button onClick={handleIncrease}>Increase</button>
  <button onClick={handleDecrease}>Decrease</button>
  </>

  )
}

export default Test