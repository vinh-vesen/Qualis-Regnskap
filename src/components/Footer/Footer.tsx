import React from "react";

import { StyledFooter, StyledFooterLink } from "./Footer.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  const onClickTracking = (eventLabel: string) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "contact",
        event_label: `${eventLabel}_footer`,
      });
    }
  };

  return (
    <>
      <StyledFooter>
        <StyledFooterLink
          href="tel:+4792226533"
          onClick={() => onClickTracking("phone")}
        >
          <LocalPhoneIcon /> <Typography variant="h6">+47 92226533</Typography>
        </StyledFooterLink>
        <StyledFooterLink
          href="mailto:nhung@qualisregnskap.no"
          onClick={() => onClickTracking("email")}
        >
          <EmailIcon />
          <Typography variant="h6">nhung@qualisregnskap.no</Typography>
        </StyledFooterLink>
        <StyledFooterLink
          href="https://www.instagram.com/qualisregnskap"
          onClick={() => onClickTracking("instagram")}
        >
          <InstagramIcon />
          <Typography variant="h6">Qualis Regnskap</Typography>
        </StyledFooterLink>
      </StyledFooter>
    </>
  );
};
