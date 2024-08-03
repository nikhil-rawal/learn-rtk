import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const [inputValue, setInputValue] = useState(1);
  const count = useSelector((state) => state.firstCounterApp.myCounterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(inputValue))}>Increment</button>
      &nbsp;
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      &nbsp;
      <button onClick={() => dispatch(decrement(inputValue))}>Decrement</button>
    </div>
  );
};

export default Counter;
