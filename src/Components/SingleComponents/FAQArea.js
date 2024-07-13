import React, { useState, useEffect } from "react";
import { useTranslations } from "../Contexts/LanguageContext";

function FaqItem({ question, answer, delay }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li
      className={`wow fadeInUp ${isOpen ? "open" : ""}`}
      data-wow-delay={`${delay}s`}
      onClick={toggle}
    >
      <a>{question}</a>
      <p style={{ display: isOpen ? "block" : "none" }}>{answer}</p>
    </li>
  );
}

function FaqSection({ title }) {
  const [faqs, setFaqs] = useState([]);
  const { language, translations } = useTranslations();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("https://localhost:3000/api/Faq");
        const data = await response.json();
        const filteredFaqs = data.$values.map((faq) => ({
          question: faq[`question_${language}`] || faq.question_en,
          answer: faq[`answer_${language}`] || faq.answer_en,
        }));
        setFaqs(filteredFaqs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, [language]);

  return (
    <div className="faq-area pt-100">
      <div className="container">
        <div className="row faq-wrap">
          <div className="col-lg-12">
            <div className="faq-head">
              <h2>{title}</h2>
            </div>
            <div className="faq-item">
              <ul className="accordion">
                {faqs.length > 0 ? (
                  faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      delay={0.3 + index * 0.1}
                    />
                  ))
                ) : (
                  <p>{translations.noFaqs}</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Örnek kullanım:
function App() {
  const { translations } = useTranslations();

  return <FaqSection title={translations.pageTitles.faqTitle} />;
}

export default App;
