import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import advisorReducer from "./features/advisor/advisorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    advisor: advisorReducer,
  },
});
