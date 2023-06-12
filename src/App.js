import React from "react";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App;