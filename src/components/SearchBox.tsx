import styled from "styled-components";

import { ScContainer } from "./System";
import { Search } from "react-feather";

const ScMain = styled.div`
  margin-bottom: 3rem;
`;

const ScInputWrapper = styled.div`
  color: #8b939b;
  position: relative;
  height: 48px;
  width: 400px;
`;

const ScInputIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScInput = styled.input`
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-left: 48px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #f3f3f5;
  transition: all 0.25s;

  &:focus {
    border-color: #ffc700;
  }
`;

export const SearchBox = () => {
  return (
    <ScMain>
      <ScContainer>
        <ScInputWrapper>
          <ScInputIcon>
            <Search size={24} />
          </ScInputIcon>
          <ScInput placeholder="Enter restaurant name..." />
        </ScInputWrapper>
      </ScContainer>
    </ScMain>
  );
};
