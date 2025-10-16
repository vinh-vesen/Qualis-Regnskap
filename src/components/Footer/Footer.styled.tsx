import Link from "@mui/material/Link";
import { styled } from "@mui/system";

export const StyledFooter = styled("footer")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "0px 0px 0px 1px rgba(32, 33, 36, 0.28)",
  backgroundColor: "#4A5C66",
  padding: "56px 0px",
  gap: "8px",
});

export const StyledFooterLink = styled(Link)({
  display: "flex",
  textDecoration: "none",
  width: "fit-content",
  alignItems: "center",
  fontWeight: "700",
  fontSize: 20,
  color: "white",
  gap: "8px",
});
