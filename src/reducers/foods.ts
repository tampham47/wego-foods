import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Food } from "../types/Food";

export interface FoodsState {
  foods: Food[];
}

export const initialFoodsState: FoodsState = {
  foods: [],
};

const slice = createSlice({
  name: "foods-reducer",
  initialState: initialFoodsState,
  reducers: {
    setFoods: (state, { payload }: PayloadAction<Food[]>) => {
      state.foods = payload;
    },
  },
});

export const { setFoods } = slice.actions;

export default slice.reducer;
