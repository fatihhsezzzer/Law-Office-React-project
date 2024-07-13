import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslations } from "../Contexts/LanguageContext";

function ExpertiseArea() {
  const { translations } = useTranslations();

  return (
    <section className="expertise-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-left">
              <span>{translations.expertiseArea.ourExpertise}</span>
              <h2>{translations.expertiseArea.title}</h2>
            </div>
            <div className="expertise-item">
              <ul>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={300}
                  animateOnce={true}
                >
                  <li>
                    <div className="expertise-icon">
                      <i className="flaticon-experience"></i>
                      <img src="assets/img/home-one/11.png" alt="Shape" />
                    </div>
                    <h3>{translations.expertiseArea.experience.title}</h3>
                    <p>{translations.expertiseArea.experience.description}</p>
                  </li>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={400}
                  animateOnce={true}
                >
                  <li>
                    <div className="expertise-icon">
                      <i className="flaticon-lawyer"></i>
                      <img src="assets/img/home-one/11.png" alt="Shape" />
                    </div>
                    <h3>{translations.expertiseArea.skilledAttorney.title}</h3>
                    <p>
                      {translations.expertiseArea.skilledAttorney.description}
                    </p>
                  </li>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={500}
                  animateOnce={true}
                >
                  <li>
                    <div className="expertise-icon">
                      <i className="flaticon-balance"></i>
                      <img src="assets/img/home-one/11.png" alt="Shape" />
                    </div>
                    <h3>{translations.expertiseArea.legalProcess.title}</h3>
                    <p>{translations.expertiseArea.legalProcess.description}</p>
                  </li>
                </AnimationOnScroll>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="expertise-image">
              <img src="assets/img/home-one/10.png" alt="Expertise" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseArea;
