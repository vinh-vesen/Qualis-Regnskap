import { styled } from "@mui/system";

export const StyledHeader = styled("header")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  height: 256,
  width: "100%",
  paddingTop: 16,
  "@media (max-width: 900px)": {
    height: 146,
  },
});

export const StyledHeaderBottom = styled("div")({
  backgroundColor: "inherit",
  width: "100%",
  display: "grid",
  gridTemplateRow: "repeat(3, 1fr)",
  justifyContent: "center",
  boxShadow: "0 1px 0 0 rgba(32, 33, 36, 0.28)",
  position: "relative",
  padding: "16px 0",
  zIndex: 100,
});

export const StyledIconContainer = styled("div")({
  position: "absolute",
  right: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  gap: 8,
  "@media (max-width: 900px)": {
    position: "static",
    justifyContent: "center",
    marginTop: "8px",
    padding: "0 4px",
    gap: 4,
  },
});

export const StyledMainLogoTopImg = styled("img")({
  height: 160,
  width: 430,
  "@media (max-width: 900px)": {
    height: 80,
    width: 200,
  },
});

export const StyledMainLogoBottomImg = styled("img")({
  height: 60,
  width: 430,
  "@media (max-width: 900px)": {
    height: 30,
    width: 200,
  },
});
