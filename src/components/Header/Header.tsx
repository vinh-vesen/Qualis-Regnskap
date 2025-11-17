import React from "react";

import {
  StyledHeader,
  StyledHeaderBottom,
  StyledIconContainer,
  StyledMainLogoTopImg,
  StyledMainLogoBottomImg,
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
        <h1>
          <a href="/" aria-label="Gå til hovedsiden">
            <StyledMainLogoTopImg
              src={require("../../mainLogo-top.png")}
              alt="qualis-logo"
            />
          </a>
        </h1>
      </StyledHeader>
      <StyledHeaderBottom id="bottomHeader">
        <StyledMainLogoBottomImg
          src={require("../../mainLogo-bottom.png")}
          alt="qualis-logo"
        />
        <StyledIconContainer>
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
        </StyledIconContainer>
      </StyledHeaderBottom>
    </>
  );
};
