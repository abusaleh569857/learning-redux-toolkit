import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import postReducer from "../feature/post/postSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export default store;
