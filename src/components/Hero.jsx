import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-heading-frame">
        <h1 className="hero-title">
          Powering the future of <br />
          dYdX through <br />
          community grants
        </h1>

        <div className="hero-actions">
          <button className="btn-secondary">Discover RFPs</button>
          <button className="btn-primary">
            Apply for grant <span>→</span>
          </button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <strong>100+</strong>
          <span>projects funded</span>
        </div>

        <div className="stat">
          <strong>$3+ million</strong>
          <span>awarded</span>
        </div>

        <div className="stat">
          <strong>400+</strong>
          <span>projects funded</span>
        </div>
      </div>
    </section>
  );
}
