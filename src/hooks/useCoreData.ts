import { useEffect } from "react";

import useAppDispatch from "./useAppDispatch";
import { setFoods } from "../reducers/foods";
import { setCategories } from "../reducers/categories";
import { getFoods } from "../apis/foods";
import { getCategories } from "../apis/categories";
import { setSystemReady } from "../reducers/system";

export const useCoreData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadCategory = getCategories().then((categories) => {
      dispatch(setCategories(categories));
    });
    const loadFoods = getFoods().then((foods) => {
      dispatch(setFoods(foods));
    });

    Promise.all([loadCategory, loadFoods]).then(() => {
      dispatch(setSystemReady(true));
    });
  }, [dispatch]);
};
