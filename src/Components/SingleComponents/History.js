import React from "react";
import { useTranslations } from "../Contexts/LanguageContext";

const AboutArea = () => {
  const { translations } = useTranslations();

  return (
    <div className="about-area pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="about-item">
              <div className="about-video-wrap">
                <div className="about-video">
                  <img src="assets/img/about/2.jpg" alt="About" />
                </div>
                <a
                  href="https://youtu.be/07d2dXHYb94"
                  className="popup-youtube"
                >
                  <i className="icofont-ui-play"></i>
                </a>
              </div>
              <div className="about-content">
                <h2>{translations.aboutArea.ourSkillsTitle}</h2>
                <p>{translations.aboutArea.ourSkillsDescription}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-item">
              {translations.aboutArea.informations.map((info, index) => (
                <div className="about-information" key={index}>
                  <h2>
                    <span>{info.date},</span> {info.title}
                  </h2>
                  <p>{info.description1}</p>
                  <p>{info.description2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
