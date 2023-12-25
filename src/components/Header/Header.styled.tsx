import styled from "@emotion/styled";

export const StyledHeader = styled.header(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
}));

export const StyledHeaderBottom = styled.div(() => {
  return {
    backgroundColor: "inherit",
    width: "100%",
    display: "grid",
    gridTemplateRow: "repeat(3, 1fr)",
    justifyContent: "center",
    boxShadow: "0 1px 0 0 rgba(32, 33, 36, 0.28)",
    position: "relative",
    padding: "16px 0",
  };
});

export const StyledIconContainer = styled.div(() => {
  return {
    position: "absolute",
    right: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    gap: 8,
  };
});

export const StyledMainLogoTopImg = styled.img(() => {
  return {
    height: 160,
    width: 430,
    "@media (max-width: 900px)": {
      height: 80,
      width: 200,
    },
  };
});

export const StyledMainLogoBottomImg = styled.img(() => {
  return {
    height: 60,
    width: 430,
    "@media (max-width: 900px)": {
      height: 30,
      width: 200,
    },
  };
});
