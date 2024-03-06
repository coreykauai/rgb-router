import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function Red() {
  return <div className="page red">Red</div>;
}

function Green() {
  return <div className="page green">Green</div>;
}

function Blue() {
  return <div className="page blue">Blue</div>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </>
  );
}

export default App;
