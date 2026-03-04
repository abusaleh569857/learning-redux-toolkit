import { createSlice } from "@reduxjs/toolkit";

const initialCount = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState : initialCount,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    increamentByValue: (state, action) => {
      state.count += action.payload;
    },
    decreamentByValue: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {increament, decreament, increamentByValue, decreamentByValue, reset} = counterSlice.actions;
export default counterSlice.reducer;