import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increamentByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increament, decrement, increamentByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
