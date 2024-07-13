import React from "react";
import { useTranslations } from "../Contexts/LanguageContext";
import { Link } from "react-router-dom";

const AboutPageHelpArea = () => {
  const { translations } = useTranslations();

  return (
    <div className="help-area help-area-two help-area-four pb-70">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="help-item help-left">
              <img src="assets/img/home-two/5.jpg" alt="Help" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="help-item">
              <div className="help-right">
                <h2>{translations.helpArea.title}</h2>
                <p>{translations.helpArea.description1}</p>
                <p>{translations.helpArea.description2}</p>
                <div className="help-inner-left">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.browse}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.choose}
                    </li>
                  </ul>
                </div>
                <div className="help-inner-right">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.reply}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.performance}
                    </li>
                  </ul>
                </div>
                <div className="help-signature">
                  <img src="assets/img/home-one/4.png" alt="Signature" />
                </div>
                <h3>{translations.helpArea.founderName}</h3>
                <span>{translations.helpArea.founderTitle}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center help-wrap">
          <div className="col-lg-6">
            <div className="help-item">
              <div className="help-right">
                <h2>{translations.helpArea.excellentServiceTitle}</h2>
                <p>{translations.helpArea.excellentServiceDescription}</p>
                <div className="help-inner-left">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.onTimeResponse}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.legalWay}
                    </li>
                  </ul>
                </div>
                <div className="help-inner-right">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.legalServices}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.helpArea.honestWork}
                    </li>
                  </ul>
                </div>
                <Link to="/attorney-detail" className="cmn-btn">
                  {translations.helpArea.learnMore}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="help-item help-left">
              <img src="assets/img/home-two/6.jpg" alt="Help" />
            </div>
          </div>
        </div>
        <div className="help-shape">
          <img src="assets/img/home-one/6.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageHelpArea;
