import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import foodsReducer from "./reducers/foods";
import categoriesReducer from "./reducers/categories";
import systemReducer from "./reducers/system";

export const rootReducer = {
  foods: foodsReducer,
  categories: categoriesReducer,
  system: systemReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
