import React from "react";

import { StyledFooter, StyledFooterLink } from "./Footer.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <>
      <StyledFooter sx={{ py: 7, gap: 2 }}>
        <StyledFooterLink href="tel:+4792226533" sx={{ gap: 1 }}>
          <LocalPhoneIcon /> <Typography variant="h6">+47 92226533</Typography>
        </StyledFooterLink>
        <StyledFooterLink href="mailto:nhung@qualisregnskap.no" sx={{ gap: 1 }}>
          <EmailIcon />
          <Typography variant="h6">nhung@qualisregnskap.no</Typography>
        </StyledFooterLink>
      </StyledFooter>
    </>
  );
};
