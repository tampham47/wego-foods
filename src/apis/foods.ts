import { Food } from "../types/Food";

export const getFoods = () => {
  return fetch("https://run.mocky.io/v3/c75dc0d8-ad78-4b3d-b697-807a5ded8645")
    .then((resp) => resp.json())
    .then((data) => {
      return data.foods as Food[];
    })
    .catch((err) => {
      // Capture error here in the future
      return [];
    });
};
