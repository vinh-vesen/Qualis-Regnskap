import React from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import { StyledText } from "./InfoBoxAccounting.styled";

export const InfoBoxAccounting = () => {
  return (
    <>
      <CalculateIcon fontSize="large" />
      <StyledText>
        <h2>Regnskap</h2>
        <p>
          Vi sørger for bokføring og et oppdatert regnskap, som er et viktig
          verktøy og som vil gi innsikt i bedriftens økonomiske situasjon og som
          hjelper med å ta de riktige beslutningene. Du bestemmer hvor involvert
          du vil være med i prosessen. Vi kan samarbeide på forskjellige måter.
          Vi kan utføre alt, dere kan utføre deler av oppgavene eller vi kun
          skal kontrollere. Vi sørger for at bedriftens behov blir ivaretatt. Vi
          tilpasser både rutiner, tjenester og systemer til bedriftens behov.
        </p>
      </StyledText>
    </>
  );
};
