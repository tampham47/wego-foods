import styled from "styled-components";

export const ScButton = styled.button`
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  color: #777e86;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.25s;
  background-color: #f7f8fa;
  border: 1px solid #ffc700;
  border-radius: 16px;
  cursor: pointer;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: #ffdd66;
  }

  &.active {
    background-color: #ffc700;
  }
`;
