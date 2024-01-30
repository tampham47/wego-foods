import { Card } from "./components/Card";
import { ScContainer } from "./components/System";
import { foods } from "./mocks";
import styled from "styled-components";

const ScHeader = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-weight: bold;
`;

const ScBody = styled.div`
  margin-bottom: 8rem;
`;

const ScList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
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

function App() {
  return (
    <div>
      <ScHeader>
        <ScContainer>Wego Foods</ScContainer>
      </ScHeader>

      <ScBody>
        <ScContainer>
          <ScList>
            {foods.map((i) => (
              <ScListItem>
                <Card item={i} key={i.id} />
              </ScListItem>
            ))}
          </ScList>
        </ScContainer>
      </ScBody>
    </div>
  );
}

export default App;
