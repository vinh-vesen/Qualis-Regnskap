import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    const isSticky = () => {
      var header = document.getElementById("bottomHeader");
      if (header) {
        const scrollMatch = isMobile ? 84 : 164;
        if (window.scrollY > scrollMatch) {
          header.style.position = "fixed";
          header.style.top = "0";
        } else {
          header.style.position = "relative";
          header.style.top = "unset";
        }
      }
    };
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <StyledHeader>
      <div>
        <StyledMainLogoTopImg
          src={require("../../mainLogo-top.png")}
          alt="qualis-logo"
        />
      </div>
      <StyledHeaderBottom id="bottomHeader">
        <StyledMainLogoBottomImg
          src={require("../../mainLogo-bottom.png")}
          alt="qualis-logo"
        />
        <StyledIconContainer>
          <IconButton
            href="tel:+4792226533"
            aria-label="phone number for contact"
          >
            <LocalPhoneIcon />
          </IconButton>
          <IconButton
            href="mailto:nhung@qualisregnskap.no"
            aria-label="email for contact"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/qualisregnskap"
            aria-label="instagram for contact"
          >
            <InstagramIcon />
          </IconButton>
        </StyledIconContainer>
      </StyledHeaderBottom>
    </StyledHeader>
  );
};
