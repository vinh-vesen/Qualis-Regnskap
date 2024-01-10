import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const StyledApp = styled("div")({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledContent = styled("div")({
  padding: "32px",
  maxWidth: 1200,
});

export const StyledInfoBoxList = styled(List)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
});

export const StyledInfoBox = styled(ListItem)({
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: 2,
  padding: 16,
});
