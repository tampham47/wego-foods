import { Category } from "../types/Category";

export const getCategories = () => {
  return fetch("https://run.mocky.io/v3/b88ec762-2cb3-4015-8960-2839b06a7593")
    .then((resp) => resp.json())
    .then((data) => {
      return data as Category[];
    })
    .catch((err) => {
      // Capture error here in the future
      return [];
    });
};
