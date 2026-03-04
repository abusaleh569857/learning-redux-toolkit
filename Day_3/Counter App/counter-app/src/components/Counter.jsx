import React, { useState } from "react";

import {
  increament,
  decreament,
  increamentByValue,
  decreamentByValue,
  reset,
} from "../feature/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [increamentValue, setIncreamentValue] = useState(0);
  const [decreamentValue, setDecreamentValue] = useState(0);

  console.log("Increament : ", increamentValue);

  const addValue = (e) => {
    const value = Number(e.target.value);
    setIncreamentValue(value);
  };

  const substractValue = (e) => {
    const value = Number(e.target.value);
    setDecreamentValue(value);
  };
  return (
    <div className="bg-cyan-200">
      <h1 className="bg-purple-500 text-center p-4 text-3xl font-bold">
        Welcome to my Counter App
      </h1>

      <h1 className="bg-blue-400 text-center p-4"> Count : {count}</h1>
      <div className="flex justify-center items-center gap-4 mt-5">
        <div>
          <button
            onClick={() => dispatch(increament())}
            className="bg-cyan-400 text-center p-4 rounded-lg  hover:bg-cyan-500"
          >
            Add
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(decreament())}
            className="bg-cyan-400 text-center p-4 rounded-lg  hover:bg-cyan-500"
          >
            Substract
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            name="add"
            id="add"
            placeholder="Input a Number to Add"
            onChange={addValue}
            className="border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 ring-blue-600 rounded-lg"
          />
          <button
            onClick={() => dispatch(increamentByValue(increamentValue))}
            className="bg-cyan-400 text-center p-4 rounded-lg  hover:bg-cyan-500"
          >
            Added By User's Input Value
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            name="substract"
            id="substract"
            placeholder="Input a Number to Sub"
            onChange={substractValue}
            className="border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 ring-blue-600 rounded-lg"
          />
          <button
            onClick={() => dispatch(decreamentByValue(decreamentValue))}
            className="bg-cyan-400 text-center p-4 rounded-lg hover:bg-cyan-500"
          >
            Substract By User's Input Value
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 py-5">
        <button
          onClick={() => dispatch(reset())}
          className="bg-cyan-400 text-center p-4 rounded-lg hover:bg-cyan-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
