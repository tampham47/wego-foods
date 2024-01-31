import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Category } from "../types/Category";

export interface CategoriesState {
  categories: Category[];
}

export const initialCategoriesState: CategoriesState = {
  categories: [],
};

const slice = createSlice({
  name: "categories-reducer",
  initialState: initialCategoriesState,
  reducers: {
    setCategories: (state, { payload }: PayloadAction<Category[]>) => {
      state.categories = payload;
    },
  },
});

export const { setCategories } = slice.actions;

export default slice.reducer;
