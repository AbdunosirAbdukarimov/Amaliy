import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const authService = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onShow: (state) => {
      state.loggedIn = true;
    },
    onClose: (state) => {
      state.loggedIn = false;
    },
    
  },
});

export const { onClose, onShow } =
  authService.actions;

export default authService.reducer;
