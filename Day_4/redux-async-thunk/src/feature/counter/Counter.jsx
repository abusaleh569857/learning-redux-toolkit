import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  reset,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [addValue, setAddValue] = useState(0);
  const [subValue, setSubValue] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>count : {count}</h1>
      <div className="flex flex-col gap-5">
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Sub</button>

        <input
          id="add"
          name="add"
          type="text"
          placeholder="add "
          onChange={(e) => setAddValue(Number(e.target.value))}
        />
        <button
          id="add"
          name="add"
          onClick={() => dispatch(incrementByValue(addValue))}
        >
          Add By Value
        </button>
        <input
          id="sub"
          name="sub"
          type="text"
          placeholder="sub "
          onChange={(e) => setSubValue(Number(e.target.value))}
        />
        <button
          id="sub"
          name="sub"
          onClick={() => dispatch(decrementByValue(subValue))}
        >
          Sub By Value
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
