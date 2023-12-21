import React, { useEffect, useRef } from "react";
import {
  StyledHeader,
  StyledHeaderBottom,
  StyledIconContainer,
} from "./Header.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
        <img
          src={require("../../mainLogo-top.png")}
          alt="qualis-logo"
          height="160px"
          width="430px"
        />
      </div>
      <StyledHeaderBottom id="bottomHeader">
        <img
          src={require("../../mainLogo-bottom.png")}
          alt="qualis-logo"
          height="60px"
          width="430px"
        />
        <StyledIconContainer>
          <LocalPhoneIcon />
        </StyledIconContainer>
      </StyledHeaderBottom>
    </StyledHeader>
  );
};
