import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  loggedStatus: false,
};

const sliceObj = {
  name: "authentication",
  initialState,
  reducers: {
    storeUsername: (state, action) => {
      state.username = action.payload;
    },
    storePassword: (state, action) => {
      state.password = action.payload;
    },
    validateAuthData: (state) => {
      if (state.username === "krishna" && state.password === "12345") {
        state.loggedStatus = true;
      } else {
        state.loggedStatus = false;
      }
    },
  },
};

export const authenticationSlice = createSlice(sliceObj);

export default authenticationSlice.reducer;
export const { storeUsername, storePassword, validateAuthData } =
  authenticationSlice.actions;
