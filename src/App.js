import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
