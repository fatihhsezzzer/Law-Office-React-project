import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function PageTitle({ title }) {
  const { translations } = useTranslations();

  return (
    <div className="page-title-area page-title-area-two title-img-one">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="page-title-text">
            <h2>{translations.pageTitles[title]}</h2>
            <ul>
              <li>
                <Link to="/">{translations.pageTitles.home}</Link>
              </li>
              <li>
                <i className="icofont-simple-right"></i>
              </li>
              <li>{translations.pageTitles[title]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
