import styled from "styled-components";
import { ScContainer } from "./System";
import { Category } from "../types/Category";
import useAppDispatch from "../hooks/useAppDispatch";
import { setSelectedCategoryId } from "../reducers/system";

const ScMain = styled.div`
  margin-bottom: 1.5rem;

  @media screen and (min-width: 920px) {
    margin-bottom: 3rem;
  }
`;

const ScBody = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #ffc700;
  display: flex;

  @media screen and (min-width: 920px) {
    display: inline-block;
  }
`;

const ScButton = styled.button`
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
  border: 0;
  color: #777e86;
  font-size: 13px;
  font-weight: bold;
  transition: all 0.25s;
  background-color: #f7f8fa;
  border-right: 1px solid #ffc700;
  cursor: pointer;
  flex: 1 1 auto;

  @media screen and (min-width: 920px) {
    padding-left: 24px;
    padding-right: 24px;
    font-size: 14px;
  }

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #ffdd66;
  }

  &.active {
    background-color: #ffc700;
  }
`;

export const Filter = ({
  data,
  selectedCategoryId,
}: {
  data: Category[];
  selectedCategoryId: string;
}) => {
  const dispatch = useAppDispatch();

  return (
    <ScMain>
      <ScContainer>
        <ScBody>
          <ScButton
            onClick={() => dispatch(setSelectedCategoryId(""))}
            className={selectedCategoryId === "" ? "active" : ""}
          >
            All
          </ScButton>
          {data.map((i) => (
            <ScButton
              key={i.id}
              onClick={() => dispatch(setSelectedCategoryId(i.id))}
              className={selectedCategoryId === i.id ? "active" : ""}
            >
              {i.name}
            </ScButton>
          ))}
        </ScBody>
      </ScContainer>
    </ScMain>
  );
};
