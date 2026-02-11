import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      {/* TEXT FRAME */}
      <div className="projects-text">
        <h2>Projects built with grants</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <a href="#" className="projects-link">
          View all funded projects <span>→</span>
        </a>
      </div>

      {/* CARDS */}
      <div className="projects-cards">
        <div className="project-card">
          <span className="project-type">Crowdfund</span>
          <h3>Funding rates page</h3>
          <p className="amount">Funding amount · $5,000 – $6,000</p>
          <p className="desc">
            Grant will be used to build a dedicated web app to give traders a
            view of all dYdX asset funding rates across multiple timeframes.
            The page will be interactive to include deep diving across
            different assets and historical analysis of changing rates.
          </p>

          <div className="avatars">
            <span>👤</span>
            <span>👤</span>
          </div>
        </div>

        <div className="project-card">
          <span className="project-type">Edition</span>
          <h3>Tradingview integration</h3>
          <p className="amount">Funding amount · $5,000 – $6,000</p>
          <p className="desc">
            The grant will be used to build a web application that integrates
            Tradingview strategies into a dYdX Trading account to execute
            trades directly through a strategy.
          </p>

          <div className="avatars">
            <span>👤</span>
            <span>👤</span>
            <span>👤</span>
          </div>
        </div>

        <div className="project-card">
          <span className="project-type">Entry</span>
          <h3>Rewards optimization research and paper</h3>
          <p className="amount">Funding amount · $5,000 – $6,000</p>
          <p className="desc">
            The Grant will be used to write a full research report and code
            samples that will determine optimal trading strategies for rewards
            maximization.
          </p>

          <div className="avatars">
            <span>👤</span>
            <span>👤</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </section>
  );
}
