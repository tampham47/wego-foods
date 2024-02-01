import { shallowEqual } from "react-redux";
import styled from "styled-components";

import { ScContainer } from "./components/System";
import { useCoreData } from "./hooks/useCoreData";
import { RootState } from "./store";
import useAppSelector from "./hooks/useAppSelector";
import WegoFoods from "./WegoFoods";

import "@johanaarstein/dotlottie-player";

const ScHeader = styled.header`
  font-weight: bold;
  height: 72px;
  line-height: 72px;
  font-size: 24px;
  border-bottom: 1px solid #e8c872;
  margin-bottom: 3rem;
`;

const ScLogo = styled.span`
  display: inline-block;
  background-color: #ffc700;
  line-height: 36px;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
`;
const ScFoods = styled.span`
  color: #d04848;
`;

const ScLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
        <ScContainer>
          <ScLogo>
            Wego<ScFoods>Foods</ScFoods>
          </ScLogo>
        </ScContainer>
      </ScHeader>

      {appReady ? (
        <WegoFoods />
      ) : (
        <ScContainer>
          <ScLoadingContainer>
            <dotlottie-player
              src="/content/food-prepare.json"
              background="transparent"
              style={{ width: 480, height: 480 }}
              speed={1}
              direction={1}
              play-mode="normal"
              loop
              autoplay
            ></dotlottie-player>
          </ScLoadingContainer>
        </ScContainer>
      )}
    </div>
  );
}

export default App;
