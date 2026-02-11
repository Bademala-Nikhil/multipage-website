import { useState } from "react";
import "../styles/FAQ.css";

const faqs = [
  "How do I apply?",
  "Can I apply as a U.S. based person/company?",
  "How will I be compensated?",
  "What type of project will qualify for a Grant?",
  "What is the application timeline? When can I expect to hear back?",
  "How can I increase my chances of getting funded?",
  "How often do you approve new Rounds of funding?"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* HEADING */}
      <div className="faq-heading">
        <h2>Frequently asked questions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="faq-list">
        {faqs.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            )}

            <div className="faq-divider" />
          </div>
        ))}
      </div>
    </section>
  );
}
