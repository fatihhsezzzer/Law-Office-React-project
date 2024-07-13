import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function PracticeArea() {
  const { translations } = useTranslations();

  return (
    <section className="practice-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>{translations.practiceArea.howCanWeHelp}</span>
          <h2>{translations.practiceArea.ourLegalPractices}</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i className="flaticon-inheritance"></i>
              </div>
              <h3>{translations.practiceArea.inheritanceLaw.title}</h3>
              <p>{translations.practiceArea.inheritanceLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-briefcase pt-3"></i>
              </div>
              <h3>{translations.practiceArea.businessLaw.title}</h3>
              <p>{translations.practiceArea.businessLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-money-check-dollar pt-3"></i>
              </div>
              <h3>{translations.practiceArea.enforcementLaw.title}</h3>
              <p>{translations.practiceArea.enforcementLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-handcuffs pt-2"></i>
              </div>
              <h3>{translations.practiceArea.criminalLaw.title}</h3>
              <p>{translations.practiceArea.criminalLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-car-burst pt-2"></i>
              </div>
              <h3>{translations.practiceArea.insuranceLaw.title}</h3>
              <p>{translations.practiceArea.insuranceLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i className="flaticon-family"></i>
              </div>
              <h3>{translations.practiceArea.familyLaw.title}</h3>
              <p>{translations.practiceArea.familyLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-computer pt-3"></i>
              </div>
              <h3>{translations.practiceArea.cyberLaw.title}</h3>
              <p>{translations.practiceArea.cyberLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i className="flaticon-judge"></i>
              </div>
              <h3>{translations.practiceArea.commercialLaw.title}</h3>
              <p>{translations.practiceArea.commercialLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="practice-item">
              <div className="practice-icon">
                <i class="fa-solid fa-money-check-dollar pt-3"></i>
              </div>
              <h3>{translations.practiceArea.bankruptcyLaw.title}</h3>
              <p>{translations.practiceArea.bankruptcyLaw.description}</p>
              <Link to="/practice-detail">
                {translations.practiceArea.readMore}
              </Link>
              <img
                className="practice-shape-one"
                src="assets/img/home-one/7.png"
                alt="Shape"
              />
              <img
                className="practice-shape-two"
                src="assets/img/home-one/8.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticeArea;
