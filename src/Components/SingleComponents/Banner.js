import React from "react";
import { useTranslations } from "../Contexts/LanguageContext";

function Banner() {
  const { translations } = useTranslations();

  return (
    <div className="banner-area banner-img-one">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-item">
                  <div className="banner-left">
                    <h1>{translations.banner.title}</h1>
                    <p>{translations.banner.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-item">
                  <div className="banner-right">
                    <img
                      className="banner-animation"
                      src="assets/img/home-one/3.png"
                      alt="Banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
