import React from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function Footer() {
  const { translations } = useTranslations();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="footer-item mt-5">
              <div className="footer-logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="Logo" />
                </Link>
                <p>{translations.footer.aboutUsText}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-youtube-play"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item mt-5">
              <div className="footer-service">
                <h3>{translations.footer.services}</h3>
                <ul>
                  <li>
                    <Link to="/practice-detail">
                      {translations.footer.familyLaw}
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice-detail">
                      {translations.footer.educationLaw}
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice-detail">
                      {translations.footer.civilLaw}
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice-detail">
                      {translations.footer.criminalLaw}
                    </Link>
                  </li>
                  <li>
                    <Link to="/practice-detail">
                      {translations.footer.businessLaw}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="footer-item mt-5">
              <div className="footer-service">
                <h3>{translations.footer.quickLinks}</h3>
                <ul>
                  <li>
                    <Link to="/">{translations.home}</Link>
                  </li>
                  <li>
                    <Link to="/about">{translations.about}</Link>
                  </li>
                  <li>
                    <Link to="/blogs">{translations.blogs}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{translations.contact}</Link>
                  </li>
                  <li>
                    <Link to="/faq">{translations.faq}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item mt-5">
              <div className="footer-find">
                <h3>{translations.footer.findUs}</h3>
                <ul>
                  <li>
                    <i className="icofont-location-pin"></i>
                    {translations.footer.address}
                  </li>
                  <li>
                    <a href="tel:+90123456789">
                      <i className="icofont-ui-call"></i>+90 123 456 78 90
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@fatihhsezer.com.tr">
                      <i className="icofont-at"></i>info@fatihhsezer.com.tr
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="row">
          <div className="col-sm-7 col-lg-6">
            <div className="copyright-item">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                {translations.footer.designedBy + " "}
                <a
                  href="https://fatihhsezer.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fatih SEZER
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-lg-6">
            <div className="copyright-item copyright-right">
              <Link to="/terms-conditions">
                {translations.footer.termsConditions}
              </Link>
              <span> - </span>
              <Link to="/privacy-policy">
                {translations.footer.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
