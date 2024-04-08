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
    handleData: (state, action) => {
      let formData = { ...state };
      formData[action.payload] = action.payload;
      return formData;
    },
    storeUsername: (state, action) => {
      state.username = action.payload;
    },
    storePassword: (state, action) => {
      state.password = action.payload;
    },
    validateAuthData: (state) => {
      if (state.username === "krishna" && state.password === "12345") {
        state.loggedStatus = true;
      }
    },
  },
};

export const authenticationSlice = createSlice(sliceObj);

export default authenticationSlice.reducer;
export const { storeUsername, storePassword, validateAuthData } =
  authenticationSlice.actions;
