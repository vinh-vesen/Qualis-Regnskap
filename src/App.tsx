import React from "react";
import { StyledApp } from "./App.styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home/Home";
import { CookiePolicy } from "./pages/CookiePolicy/CookiePolicy";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personvernerklaering" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
