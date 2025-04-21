import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Menu from "./componants/Sections/menu";
import Home from "./componants/pages/Home";

function App() {



  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
