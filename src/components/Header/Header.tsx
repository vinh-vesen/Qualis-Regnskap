import React, { useEffect, useRef } from "react";
import {
  StyledHeader,
  StyledHeaderBottom,
  StyledIconContainer,
  StyledMainLogoTopImg,
  StyledMainLogoBottomImg,
} from "./Header.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  const ref = useRef(null);

  useEffect(() => {
    const isSticky = () => {
      var header = document.getElementById("bottomHeader");
      if (header) {
        if (window.scrollY > 164) {
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
          <LocalPhoneIcon />
          <EmailIcon />
        </StyledIconContainer>
      </StyledHeaderBottom>
    </StyledHeader>
  );
};
