import React from "react";
import { useTranslations } from "../Contexts/LanguageContext";

const AboutPageExpertiseArea = () => {
  const { translations } = useTranslations();

  return (
    <section className="expertise-area expertise-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>{translations.AboutPageExpertiseArea.subtitle}</span>
          <h2>{translations.AboutPageExpertiseArea.title}</h2>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="expertise-item">
              <ul>
                {translations.AboutPageExpertiseArea.items.left.map(
                  (item, index) => (
                    <li
                      className={`wow fadeInUp`}
                      data-wow-delay={`.${index + 3}s`}
                      key={index}
                    >
                      <div className="expertise-icon">
                        <i className={item.icon}></i>
                        <img src="assets/img/home-one/11.png" alt="Shape" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="expertise-item">
              <ul>
                {translations.AboutPageExpertiseArea.items.right.map(
                  (item, index) => (
                    <li
                      className={`wow fadeInUp`}
                      data-wow-delay={`.${index + 3}s`}
                      key={index}
                    >
                      <div className="expertise-icon">
                        <i className={item.icon}></i>
                        <img src="assets/img/home-one/11.png" alt="Shape" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageExpertiseArea;
