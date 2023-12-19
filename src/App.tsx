import React from "react";
import {StyledApp} from "./App.styled"
import { QualisHeader } from "./components/QualisHeader";
const App = () => {
  return (
    <StyledApp>
      <header className="App-header">
        <QualisHeader />
      </header>
    </StyledApp>
  );
}

export default App;
