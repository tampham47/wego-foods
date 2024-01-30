import { ScButton } from "./components/Button";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { SearchBox } from "./components/SearchBox";
import { ScContainer } from "./components/System";
import { foods } from "./mocks";
import styled from "styled-components";

const ScHeader = styled.header`
  font-weight: bold;
  height: 72px;
  line-height: 72px;
  font-size: 24px;
  margin-bottom: 2rem;
  border-bottom: 1px solid gray;
`;

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

function App() {
  return (
    <div>
      <ScHeader>
        <ScContainer>WegoFoods</ScContainer>
      </ScHeader>

      <SearchBox />

      <Filter />

      <ScBody>
        <ScContainer>
          <ScList>
            {foods.map((i) => (
              <ScListItem>
                <Card item={i} key={i.id} />
              </ScListItem>
            ))}
          </ScList>

          <ScLoadMore>
            <ScButton>+ Show More</ScButton>
          </ScLoadMore>
        </ScContainer>
      </ScBody>
    </div>
  );
}

export default App;
