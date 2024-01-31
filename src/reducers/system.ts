import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { System } from "../types/System";

export interface SystemState {
  system: System;
}

export const initialSystemState: SystemState = {
  system: {
    isReady: false,
    search: "",
    selectedCategoryId: "",
    currentPage: 1,
  },
};

const slice = createSlice({
  name: "system-reducer",
  initialState: initialSystemState,
  reducers: {
    setSystemReady: (state, { payload }: PayloadAction<boolean>) => {
      state.system.isReady = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.system.search = payload;
      state.system.currentPage = 1;
    },
    setSelectedCategoryId: (state, { payload }: PayloadAction<string>) => {
      state.system.selectedCategoryId = payload;
      state.system.currentPage = 1;
    },
    showMoreFood: (state) => {
      state.system.currentPage += 1;
    },
  },
});

export const {
  setSystemReady,
  setSearch,
  setSelectedCategoryId,
  showMoreFood,
} = slice.actions;

export default slice.reducer;
