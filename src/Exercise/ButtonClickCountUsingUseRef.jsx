import React, { useEffect, useRef, useState } from 'react'

const ButtonClickCountUsingUseRef = () => {
  
  const refContainer = useRef(null)

  const handClick = () => {
    refContainer.current  += 1
    console.log(`Button Clicked ${refContainer.current} times`)

  }

 

  return (
    <div>
      <button  onClick={handClick}>Button</button>
      <p>{}</p>
    </div>
  )
}

export default ButtonClickCountUsingUseRef
