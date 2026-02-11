import { useState } from "react";
import "../styles/GrantCard.css";
import { Link } from "react-router-dom";


export default function GrantCard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="card">
      {/* HEADER (always visible) */}
      <div className="header">
        <div className="logo">
          <div className="logo-main">dYdX</div>
          <div className="logo-sub">grants</div>
        </div>

        <button className="apply-btn">Apply</button>

        {!menuOpen ? (
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </div>
        ) : (
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            ✕
          </div>
        )}
      </div>

      {/* NORMAL CARD CONTENT */}
      {!menuOpen && (
        <div className="content">
          <div className="frame-box" />

          <p className="category">Category</p>

          <h1 className="title">
            Youtube dYdX <br /> Education Library
          </h1>

          <div className="status">Funded ✓</div>

          <p className="funding">
            Funding amount: <strong>$5,000</strong>
          </p>

          <Link className="link" to="/home">
             www.granttitleproject.com ↗
            </Link>


          <p className="team">Team</p>
        </div>
      )}

      {/* MENU POPUP CONTENT (below header) */}
      {menuOpen && (
        <div className="menu-popup">
          <div className="menu-frame">
            <span>Discover initiatives</span>
            <span>Funded grants</span>
            <span>Program expenses</span>
            <span>Blog</span>
            <span>FAQ</span>
          </div>

          <div className="menu-icons">
            <span>🐦</span>
            <span>💬</span>
          </div>
        </div>
      )}
    </div>
  );
}
