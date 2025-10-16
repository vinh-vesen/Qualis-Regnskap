import React from "react";

import { StyledContent, StyledInfoBoxList, StyledInfoBox } from "./Home.styled";

import { Ingress } from "../../components/Ingress";
import { InfoBoxAccounting } from "../../components/InfoBoxAccounting";
import { InfoBoxSalery } from "../../components/InfoBoxSalery";
import { InfoBoxInvoice } from "../../components/InfoBoxInvoice";
import { InfoBoxAnnualSettlement } from "../../components/InfoBoxAnnualSettlement";
import { ServiceList } from "../../components/ServiceList";
import { ThirdPartyLinks } from "../../components/ThirdPartyLinks";

export const Home = () => {
  return (
    <>
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
    </>
  );
};
