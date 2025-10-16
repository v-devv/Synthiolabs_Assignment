// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="./Logo.svg" alt="Logo" />
      </div>

      {/* Center Links */}
      <ul className="nav-links">
        <li>
          <img src="./SquaresFour.svg" alt="Dashboard" className="nav-icon" />
          Dashboard
        </li>
        <li>
          <img src="\MagicWand.svg" alt="Insights" className="nav-icon" />
          Insights
        </li>
        <li>
          <img src="\Notebook.svg" alt="Transcript" className="nav-icon" />
          Transcript
        </li>
        <li className="active">
          <img src="\Vector.svg" alt="Transcript" className="nav-icon" />
          chat
         
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
