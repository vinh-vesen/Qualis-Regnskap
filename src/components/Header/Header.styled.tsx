import { styled } from "@mui/system";

export const StyledHeader = styled("header")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  width: "100%",
});

export const StyledH1 = styled("h1")({
  margin: 0,
});

export const StyledHeaderBottom = styled("div")({
  backgroundColor: "white",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  position: "sticky",
  top: 0,
  padding: "16px 0",
  zIndex: 999,
  boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.15)",
});

export const StyledMainLogoTopImg = styled("img")({
  height: 400,
  width: 400,
  "@media (max-width: 900px)": {
    height: 250,
    width: 250,
  },
});
