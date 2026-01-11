import React from "react";

import {
  StyledHeader,
  StyledH1,
  StyledHeaderBottom,
  StyledMainLogoTopImg,
} from "./Header.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

export const Header = () => {
  const onClickTracking = (eventLabel: string) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "contact",
        event_label: `${eventLabel}_header`,
      });
    }
  };

  return (
    <>
      <StyledHeader>
        <StyledH1>
          <a href="/" aria-label="Gå til hovedsiden">
            <StyledMainLogoTopImg
              src={require("../../qualisLogo.png")}
              alt="qualis-logo"
            />
          </a>
        </StyledH1>
      </StyledHeader>
      <StyledHeaderBottom>
        <IconButton
          href="tel:+4792226533"
          aria-label="phone number for contact"
          onClick={() => onClickTracking("phone")}
        >
          <LocalPhoneIcon />
        </IconButton>
        <IconButton
          href="mailto:nhung@qualisregnskap.no"
          aria-label="email for contact"
          onClick={() => onClickTracking("email")}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/qualisregnskap"
          aria-label="instagram for contact"
          onClick={() => onClickTracking("instagram")}
        >
          <InstagramIcon />
        </IconButton>
      </StyledHeaderBottom>
    </>
  );
};
