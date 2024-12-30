import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/slices/index";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;
