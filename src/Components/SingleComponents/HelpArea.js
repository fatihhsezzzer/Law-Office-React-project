import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function HomePageHelpArea() {
  const { translations } = useTranslations();

  return (
    <div className="help-area pb-70">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="help-item help-left">
              <img src="assets/img/home-one/5.jpg" alt="Help" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="help-item">
              <div className="help-right">
                <h2>{translations.HomePageHelpArea.title}</h2>
                <p>{translations.HomePageHelpArea.description}</p>
                <div className="help-inner-left">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.HomePageHelpArea.browse}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.HomePageHelpArea.choose}
                    </li>
                  </ul>
                </div>
                <div className="help-inner-right">
                  <ul>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.HomePageHelpArea.reply}
                    </li>
                    <li>
                      <i className="flaticon-checkmark"></i>
                      {translations.HomePageHelpArea.performance}
                    </li>
                  </ul>
                </div>
                <div className="help-signature">
                  <img src="assets/img/home-one/4.png" alt="Signature" />
                </div>
                <Link to="/about" className="cmn-btn">
                  {translations.HomePageHelpArea.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="help-shape">
          <img src="assets/img/home-one/6.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
}

export default HomePageHelpArea;
