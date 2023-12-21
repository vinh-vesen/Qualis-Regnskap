import styled from "@emotion/styled";

export const StyledHeader = styled.header(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#D7D8C6",
}));

export const StyledHeaderBottom = styled.div(() => {
  return {
    backgroundColor: "inherit",
    width: "100%",
  };
});
