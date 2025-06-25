// src/Redux/View.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const View = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>This is Counter from Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default View;
