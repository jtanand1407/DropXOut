import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.couter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(100))}>By amount</button>
    </div>
  );
}

export default Counter;
