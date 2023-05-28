import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
