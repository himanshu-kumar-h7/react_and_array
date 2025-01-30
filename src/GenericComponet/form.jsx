import React, { useEffect, useRef } from "react"
import Button from './Button'


const Form = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus(); // Focus on the input field
  };

  const handleFocusButton = () => {
    buttonRef.current.focus(); // Focus on the forwarded button
  };

  return (
    <div>
      <label htmlFor="Username" style={{ padding: "10px" }}>
        Username
      </label>
      <input
        type="text"
        id="username"
        ref={inputRef}
        placeholder="Start typing...."
      />
      <Button ref={buttonRef} />
      <button onClick={handleFocusInput}>Focus Input</button>
      <button onClick={handleFocusButton}>Focus Button</button>
    </div>
  );
};

export default Form;