import React from "react";
import { StyledApp } from "./App.styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home/Home";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
