import "../styles/ApplicationProcess.css";

export default function ApplicationProcess() {
  return (
    <section className="process">
      {/* TOP FRAME */}
      <div className="process-heading">
        <h2>Application process</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
      </div>

      {/* CARDS */}
      <div className="process-cards">
        <div className="process-card card-1">
          <span className="step">1</span>
          <h3>Apply</h3>
          <p>
            Submit a complete application to the dYdX Grants Team including as
            many details as possible about the proposed idea and their background.
          </p>
        </div>

        <div className="process-card card-2">
          <span className="step">2</span>
          <h3>Interview</h3>
          <p>
            If your application is selected, the dYdX Grants will conduct 1–2
            interviews to collect more information on the Applicant’s background
            and the proposal.
          </p>
        </div>

        <div className="process-card card-3">
          <span className="step">3</span>
          <h3>Grant offer</h3>
          <p>
            The dYdX Grants team will determine if the proposal fits into the
            grant program. A vesting schedule and timeline for product development
            reports will also be determined in the offer;
          </p>
        </div>
      </div>
    </section>
  );
}
