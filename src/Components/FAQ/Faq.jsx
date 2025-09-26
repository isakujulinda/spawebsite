import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "Lorem ipsum dolor sit, elit.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores."
  },
  {
    question: "Lorem ipsum dolor sit, elit.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores."
  },
  {
    question: "Lorem ipsum dolor sit, elit.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores."
  },
  {
    question: "Lorem ipsum dolor sit, elit.",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
