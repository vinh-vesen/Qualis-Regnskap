import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { StyledText } from "./InfoBoxAnnualSettlement.styled";

export const InfoBoxAnnualSettlement = () => {
  return (
    <>
      <EditCalendarIcon fontSize="large" />
      <StyledText>
        <h2>Årsoppgjør</h2>
        Vi sikrer at ligningsdokumenter og årsoppgjør blir riktig utfylt slik at
        du er sikker på at alle regler og frister overholdes. Det er viktig å
        starte forberedelsen i god tid. Har du revisor gjør vi klart
        avstemminger og dokumentasjon som er viktig for å bidra til at
        årsoppgjøret blir korrekt. Vi samarbeider digitalt med din revisor, som
        vil bidra til en rask og effektiv prosess.
      </StyledText>
    </>
  );
};
