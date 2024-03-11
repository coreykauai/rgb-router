import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Red from "./routes/Red";
import Green from "./routes/Green";
import Blue from "./routes/Blue";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const pageRoutes = ["/", "/green", "/blue"];
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/green">Green Page</NavLink>
            <NavLink to="/blue">Blue Page</NavLink>
            <NavLink to="/">red Page</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            // Generate a random index based on the array length
            const randomPageIndex = Math.floor(
              Math.random() * pageRoutes.length
            );
            // Navigate to the randomly selected page
            navigate(pageRoutes[randomPageIndex]);
          }}
        >
          Random Page
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </>
  );
}

export default App;
