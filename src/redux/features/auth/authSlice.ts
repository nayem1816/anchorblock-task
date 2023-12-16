import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: localStorage.getItem("auth"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    userLoggedOut: (state) => {
      state.access_token = null;

      localStorage.removeItem("auth");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
