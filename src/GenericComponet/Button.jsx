import React, { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return (
    <div>
      <p>Ref value: {ref?.current ? "Active" : "No value"}</p>
      <button ref={ref}>I am a forwarded button</button>
    </div>
  );
});

export default Button;
