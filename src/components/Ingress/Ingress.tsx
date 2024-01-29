import React from "react";
import { StyledIngress, StyledContent, StyledImg } from "./Ingress.styled";

export const Ingress = () => {
  return (
    <StyledIngress>
      <StyledContent>
        <p>
          Qualis Regnskap AS tilbyr tjenester innenfor regnskap, lønn og
          rådgivning. Vi gir deg oversikt over den økonomiske situasjonen i din
          bedrift. Vi sørger for rapportering til myndighetene til riktig tid og
          etter gjeldende lover og regler.
        </p>
        <StyledImg
          src={require("../../logos/regnskap.norge-medlem.png")}
          alt="regnskap.norge-medlem-logo"
        />
      </StyledContent>
    </StyledIngress>
  );
};
