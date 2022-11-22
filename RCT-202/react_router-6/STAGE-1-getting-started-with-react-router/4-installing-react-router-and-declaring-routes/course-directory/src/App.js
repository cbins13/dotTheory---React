import React from "react";
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="container">
  <Routes>
    <Route path="/" element={<Header /> } />
    <Route path="/" element={<Home />} />

    <Route path="/about" element={<About />} />
  </Routes>
    </div>
  );
}

export default App;
