import { styled } from "@mui/system";

export const StyledHeader = styled("header")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  width: "100%",
});

export const StyledHeaderBottom = styled("nav")({
  backgroundColor: "inherit",
  width: "100%",
  display: "grid",
  gridTemplateRow: "repeat(3, 1fr)",
  justifyContent: "center",
  position: "sticky",
  top: 0,
  padding: "16px 0",
  zIndex: 999,
  boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.15)",
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
