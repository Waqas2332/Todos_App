import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import todoReducer from "./todo.slice";
import userReducer from "./user-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    user: userReducer,
  },
});

export default store;
