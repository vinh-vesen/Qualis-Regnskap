import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import { StyledText } from "./InfoBoxSalery.styled";

export const InfoBoxSalery = () => {
  return (
    <>
      <PaidIcon fontSize="large" />
      <StyledText>
        <h2>Lønn</h2>
        <p>
          Vi sørger for korrekt lønn til rett tid. Lønn er et omfattende
          fagområde som krever kunnskap og tid. Vi tilpasser effektive løsninger
          til dine ansatte. Vi holder oss oppdaterte på gjeldende regler,
          endringer og krav fra myndighetene.
        </p>
      </StyledText>
    </>
  );
};
