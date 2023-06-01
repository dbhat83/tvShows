import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        TV Shows App
      </Link>
    </header>
  );
};

export default Header;
