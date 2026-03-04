import { createStore } from "redux";
// Define Constant

const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
// const ADD_USER = "ADD_USER";

// In redux first define state

const initialCounter = {
  count: 0,
};

// const name = "Maruf";

// const initialUser = {
//   user: [
//     {
//       userName: name,
//     },
//   ],
// };

// Dispatch Action (type , payload)

const increamentCounter = () => {
  return {
    type: INCREAMENT,
  };
};

const decreamentCounter = () => {
  return {
    type: DECREAMENT,
  };
};

// const addUser = () => {
//   return {
//     type: ADD_USER,
//     payload: { name: "Alam" },
//   };
// };

// Create Reducer (Pure JS Function , take input as parameter & give output)

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREAMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increamentCounter());
store.dispatch(increamentCounter());
store.dispatch(increamentCounter());
