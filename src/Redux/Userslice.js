import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { signup, logout } = Userslice.actions;
export const selectUser = (state) => state.user.user;
export default Userslice.reducer;
