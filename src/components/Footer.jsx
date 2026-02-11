import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT LOGO */}
        <div className="footer-logo">
          <div className="logo-circle">
            X
          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Brand assets</a>
          <a href="#">dYdX Foundation ↗</a>
          <a href="#">dYdX trading ↗</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-social">
          <span>🐦</span>
          <span>💬</span>
        </div>

      </div>
    </footer>
  );
}
