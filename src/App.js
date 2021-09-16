import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      {/* <Switch> */}
      {/* <Route path='/aboutme' exact component={Technologies} /> */}
      <Route path='/About' component={About} />
      <Route path='/' exact component={Home} />
      {/* <Route path='/projects' exact component={Projects} /> */}
      {/* </Switch> */}
      <Footer />
    </Router>
  );
}

export default App;
