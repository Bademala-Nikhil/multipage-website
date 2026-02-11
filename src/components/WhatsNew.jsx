import "../styles/WhatsNew.css";

export default function WhatsNew() {
  return (
    <section className="whatsnew">
      {/* TOP TEXT */}
      <div className="whatsnew-text">
        <h2>What’s new?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          nulla risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <a href="#" className="whatsnew-link">
          Read more on our blog <span>→</span>
        </a>
      </div>

      {/* BLOG CARDS */}
      <div className="whatsnew-cards">
        <div className="blog-card">
          <div className="blog-image">
            <span>Funding round</span>
            <h3>Round 9 of approvals</h3>
          </div>
          <div className="blog-content">
            <span className="blog-category">Funding round</span>
            <h4>Round 9 of approvals</h4>
            <p className="blog-date">January 1, 2022</p>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image">
            <span>Funding round</span>
            <h3>Round 8 of approvals</h3>
          </div>
          <div className="blog-content">
            <span className="blog-category">Funding round</span>
            <h4>Round 8 of approvals</h4>
            <p className="blog-date">January 1, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
