import { shallowEqual } from "react-redux";
import styled from "styled-components";

import { ScContainer } from "./components/System";
import { useCoreData } from "./hooks/useCoreData";
import { RootState } from "./store";
import useAppSelector from "./hooks/useAppSelector";
import WegoFoods from "./WegoFoods";

const ScHeader = styled.header`
  font-weight: bold;
  height: 72px;
  line-height: 72px;
  font-size: 24px;
  border-bottom: 1px solid gray;
  margin-bottom: 3rem;
`;

const selector = (state: RootState) => {
  const { system } = state;
  return {
    appReady: system.system.isReady,
  };
};

function App() {
  useCoreData();
  const { appReady } = useAppSelector(selector, shallowEqual);

  return (
    <div>
      <ScHeader>
        <ScContainer>WegoFoods</ScContainer>
      </ScHeader>

      {appReady ? (
        <WegoFoods />
      ) : (
        <ScContainer>
          <div>Loading...</div>
        </ScContainer>
      )}
    </div>
  );
}

export default App;
