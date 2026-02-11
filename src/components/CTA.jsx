import "../styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-subtitle">
          Have a project in mind?
        </span>

        <h2 className="cta-title">
          Let’s create something awesome.
        </h2>

        <button className="cta-button">
          Apply for grant <span>→</span>
        </button>
      </div>
    </section>
  );
}
