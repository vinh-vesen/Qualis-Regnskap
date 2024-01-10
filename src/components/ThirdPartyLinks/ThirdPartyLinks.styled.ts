import { styled } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const StyledThirdPartyLinks = styled("div")({
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
})
export const StyledList = styled(List)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
})

export const StyledListItem = styled(ListItem)({
    width: "fit-content"
})

export const StyledImg = styled("img")({
    width: 100,
})