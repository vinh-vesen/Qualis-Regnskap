import React from "react";
import {
  StyledThirdPartyLinks,
  StyledList,
  StyledListItem,
  StyledImg,
} from "./ThirdPartyLinks.styled";

export const ThirdPartyLinks = () => {
  return (
    <StyledThirdPartyLinks>
      <h2>Nyttige lenker</h2>
      <StyledList>
        <StyledListItem>
          <a href="https://www.skatteetaten.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-skatteetaten.png")}
              alt="skatteetaten-logo"
            />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="https://info.altinn.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-altinn.png")}
              alt="altinn-logo"
            />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="https://www.nav.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-nav.png")}
              alt="nav-logo"
            />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="https://www.brreg.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-brreg.png")}
              alt="brreg-logo"
            />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="https://www.regnskapnorge.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-regnskap-Norge.png")}
              alt="regskap-Norge-logo"
            />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="https://www.tripletex.no/" target="_blank">
            <StyledImg
              src={require("../../logos/logo-tripletex.png")}
              alt="tripletex-logo"
            />
          </a>
        </StyledListItem>
      </StyledList>
    </StyledThirdPartyLinks>
  );
};
