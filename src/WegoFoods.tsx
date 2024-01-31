import styled from "styled-components";
import { filter, isEqual } from "lodash";

import { ScButton } from "./components/Button";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { SearchBox } from "./components/SearchBox";
import { ScContainer } from "./components/System";
import { RootState } from "./store";
import useAppSelector from "./hooks/useAppSelector";
import { Food } from "./types/Food";
import { ITEM_PER_PAGE } from "./const";
import useAppDispatch from "./hooks/useAppDispatch";
import { showMoreFood } from "./reducers/system";

const ScBody = styled.div`
  margin-bottom: 8rem;
`;

const ScList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: 2rem;
`;

const ScListItem = styled.div`
  width: calc(33.3% - 24px);
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ScLoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const selector = (state: RootState) => {
  const foods = state.foods.foods;
  const categories = state.categories.categories;
  const system = state.system;
  const selectedCategoryId = system.system.selectedCategoryId;
  const search = system.system.search;
  const currentPage = system.system.currentPage;

  const filterFoodsByCategory = !selectedCategoryId
    ? foods
    : foods.filter((i) => i.categoryId === selectedCategoryId);

  const filterFoodsByRestaurant = filter(
    filterFoodsByCategory,
    (i: Food) => i.restaurant.toLowerCase().indexOf(search.toLowerCase()) >= 0
  );

  return {
    foods: filterFoodsByRestaurant.slice(0, ITEM_PER_PAGE * currentPage),
    categories: categories,
    search,
    selectedCategoryId,
    isLoadMore: filterFoodsByRestaurant.length > ITEM_PER_PAGE * currentPage,
  };
};

function WegoFoods() {
  const dispatch = useAppDispatch();
  const { foods, categories, search, selectedCategoryId, isLoadMore } =
    useAppSelector(selector, isEqual);

  return (
    <>
      <SearchBox search={search} />
      <Filter data={categories} selectedCategoryId={selectedCategoryId} />

      <ScBody>
        <ScContainer>
          {!foods.length ? <p>No foods found.</p> : null}

          <ScList>
            {foods.map((i) => (
              <ScListItem key={i.id}>
                <Card item={i} />
              </ScListItem>
            ))}
          </ScList>

          {isLoadMore ? (
            <ScLoadMore>
              <ScButton onClick={() => dispatch(showMoreFood())}>
                + Show More
              </ScButton>
            </ScLoadMore>
          ) : null}
        </ScContainer>
      </ScBody>
    </>
  );
}

export default WegoFoods;
