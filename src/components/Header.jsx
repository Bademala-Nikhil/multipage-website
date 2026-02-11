import { useState } from "react";
import "../styles/Header.css";
import logo from "./logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-outer">
      <div className="header-inner">
        {/* LOGO */}
        <div className="header-logo">
          <img src={logo} alt="dYdX Grants Logo" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="header-nav">
          <span>Discover initiatives</span>
          <span>Funded grants</span>
          <span>Program expenses</span>
          <span>Blog</span>
          <span>FAQ</span>
        </nav>

        {/* DESKTOP BUTTON */}
        <button className="header-btn">Apply for grant</button>

        {/* MOBILE MENU ICON */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <span>Discover initiatives</span>
          <span>Funded grants</span>
          <span>Program expenses</span>
          <span>Blog</span>
          <span>FAQ</span>

          <button className="mobile-btn">Apply for grant</button>
        </div>
      )}
    </header>
  );
}
