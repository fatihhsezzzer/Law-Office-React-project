import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function PortfolioArea() {
  const { translations } = useTranslations();

  return (
    <section className="portfolio-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>{translations.portfolioArea.portfolio}</span>
          <h2>{translations.portfolioArea.checkOut}</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="portfolio-item">
              <img src="assets/img/home-one/portfolio/1.jpg" alt="Portfolio" />
              <div className="portfolio-inner">
                <span>{translations.portfolioArea.crime}</span>
                <h3>
                  <Link to="/case-study-details/murder-case">
                    {translations.portfolioArea.murderCase}
                  </Link>
                </h3>
                <p>15 Feb 2021</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="portfolio-item">
              <img src="assets/img/home-one/portfolio/2.jpg" alt="Portfolio" />
              <div className="portfolio-inner">
                <span>{translations.portfolioArea.rights}</span>
                <h3>
                  <Link to="/case-study-details/children-rights">
                    {translations.portfolioArea.childrenRights}
                  </Link>
                </h3>
                <p>16 Feb 2021</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
            <div className="portfolio-item">
              <img src="assets/img/home-one/portfolio/3.jpg" alt="Portfolio" />
              <div className="portfolio-inner">
                <span>{translations.portfolioArea.finance}</span>
                <h3>
                  <Link to="/case-study-details/money-laundering">
                    {translations.portfolioArea.moneyLaundering}
                  </Link>
                </h3>
                <p>17 Feb 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/case-study" className="cmn-btn">
            {translations.portfolioArea.seeMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioArea;
