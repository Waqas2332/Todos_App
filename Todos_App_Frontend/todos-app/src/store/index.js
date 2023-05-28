import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import todoReducer from "./todo.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});

export default store;
