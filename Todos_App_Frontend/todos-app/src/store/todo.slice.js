import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.todos = action.payload;
    },
    deleteItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

export const { setItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
