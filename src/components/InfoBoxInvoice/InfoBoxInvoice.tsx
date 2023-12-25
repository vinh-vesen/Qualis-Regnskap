import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { StyledText } from "./InfoBoxInvoice.styled";

export const InfoBoxInvoice = () => {
  return (
    <>
      <ReceiptIcon />
      <StyledText>
        <h2>Fakturering</h2>
        <p>
          Vi bistår med alt innen fakturering i henhold til krav om
          fakturautforming. Enten du vil fakturere selv eller om vi tar hele
          jobben for deg, så har vi effektive løsninger som tilpasser din
          bedrift.
        </p>
      </StyledText>
    </>
  );
};
