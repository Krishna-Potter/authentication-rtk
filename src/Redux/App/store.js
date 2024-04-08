import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Authentication/auth";

export const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});
