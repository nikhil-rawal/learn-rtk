import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCounterValue: 0,
};

const counterSlice = createSlice({
  name: "onlyCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.myCounterValue += action.payload || 1;
    },
    decrement: (state, action) => {
      state.myCounterValue -= action.payload || 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
