import { useRef } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -424, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 424, behavior: "smooth" });
  };

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

      {/* DESKTOP ARROWS */}
      <div className="projects-controls">
        <button onClick={scrollLeft}>←</button>
        <button onClick={scrollRight}>→</button>
      </div>

      {/* CARDS */}
      <div className="projects-cards" ref={scrollRef}>
        {[
          {
            type: "Crowdfund",
            title: "Funding rates page",
          },
          {
            type: "Edition",
            title: "Tradingview integration",
          },
          {
            type: "Entry",
            title: "Rewards optimization research and paper",
          },
        ].map((item, index) => (
          <div className="project-card" key={index}>
            <span className="project-type">{item.type}</span>
            <h3>{item.title}</h3>
            <p className="amount">Funding amount · $5,000 – $6,000</p>
            <p className="desc">
              Grant will be used to build a dedicated application aligned with
              dYdX ecosystem goals.
            </p>
            <div className="avatars">
              <span>👤</span>
              <span>👤</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
