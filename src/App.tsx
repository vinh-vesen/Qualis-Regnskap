import React from "react";
import {
  StyledApp,
  StyledContent,
  StyledInfoBoxList,
  StyledInfoBox,
} from "./App.styled";
import { Header } from "./components/Header";
import { Ingress } from "./components/Ingress";
import { InfoBoxAccounting } from "./components/InfoBoxAccounting";
import { InfoBoxSalery } from "./components/InfoBoxSalery";
import { InfoBoxInvoice } from "./components/InfoBoxInvoice";
import { InfoBoxAnnualSettlement } from "./components/InfoBoxAnnualSettlement";
import { ServiceList } from "./components/ServiceList";
import { ThirdPartyLinks } from "./components/ThirdPartyLinks";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Ingress />
      <StyledContent>
        <StyledInfoBoxList>
          <StyledInfoBox>
            <InfoBoxAccounting />
          </StyledInfoBox>
          <StyledInfoBox>
            <InfoBoxSalery />
          </StyledInfoBox>
          <StyledInfoBox>
            <InfoBoxInvoice />
          </StyledInfoBox>
          <StyledInfoBox>
            <InfoBoxAnnualSettlement />
          </StyledInfoBox>
        </StyledInfoBoxList>
        <ServiceList />
        <ThirdPartyLinks />
      </StyledContent>
    </StyledApp>
  );
};

export default App;