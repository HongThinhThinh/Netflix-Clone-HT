import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
console.log("vô store r nhen");
export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
});
