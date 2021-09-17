import React from "react";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkR,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
