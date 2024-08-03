//setting up the redux store
//In store.js, configure the store using configureStore from Redux Toolkit. This function sets up the store with good defaults and simplifies the setup process.

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const store = configureStore({
  reducer: { firstCounterApp: counterSlice },
});

export default store;
