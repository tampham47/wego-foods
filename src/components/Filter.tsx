import styled from "styled-components";
import { ScContainer } from "./System";

const ScMain = styled.div`
  margin-bottom: 3rem;
`;

const ScBody = styled.div`
  display: inline-block;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #ffc700;
`;

const ScButton = styled.button`
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  border: 0;
  color: #777e86;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.25s;
  background-color: #f7f8fa;
  border-right: 1px solid #ffc700;
  cursor: pointer;

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

export const Filter = () => {
  return (
    <ScMain>
      <ScContainer>
        <ScBody>
          <ScButton onClick={() => null} className="active">
            All
          </ScButton>
          <ScButton onClick={() => null}>Sushi</ScButton>
          <ScButton onClick={() => null}>Pizza</ScButton>
          <ScButton onClick={() => null}>Burgers</ScButton>
          <ScButton onClick={() => null}>Hot Meals</ScButton>
          <ScButton onClick={() => null}>Desserts</ScButton>
          <ScButton onClick={() => null}>Drinks</ScButton>
        </ScBody>
      </ScContainer>
    </ScMain>
  );
};
