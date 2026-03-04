import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
