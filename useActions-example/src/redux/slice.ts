import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface State {
  num: number;
}

const initialState: State = {
  num: 0,
};

export const exampleSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setNum(state, action: PayloadAction<number>) {
      state.num = action.payload;
    },
  },
});
