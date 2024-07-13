import React from "react";

const PracticeDetailsArea = () => {
  return (
    <div className="practice-details-area pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="practice-details-item">
              <div className="practice-details-content">
                <div className="section-title text-left">
                  <h2>Criminal Law</h2>
                </div>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.{" "}
                </p>
                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <span>Retribution –</span> Criminals ought to Be Punished in
                    some way.
                  </li>
                  <li>
                    <span>Deterrence –</span> Individual deterrence is aimed
                    toward the specific offender.
                  </li>
                  <li>
                    <span>Incapacitation –</span> Designed simply to keep
                    criminals away from society.
                  </li>
                  <li>
                    <span>Rehabilitation –</span> Aims at transforming an
                    offender into a valuable member of society.
                  </li>
                </ul>
                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="practice-details-case">
              <div className="row">
                <PortfolioItem
                  delay=".3s"
                  image="assets/img/home-one/portfolio/1.jpg"
                  category="Crime"
                  title="Critical Murder Case"
                  date="15 Feb 2021"
                />
                <PortfolioItem
                  delay=".4s"
                  image="assets/img/home-one/portfolio/2.jpg"
                  category="Rights"
                  title="Property Problem"
                  date="16 Feb 2021"
                />
                <PortfolioItem
                  delay=".3s"
                  image="assets/img/home-one/portfolio/3.jpg"
                  category="Finance"
                  title="Money Loundering"
                  date="17 Feb 2021"
                />
                <PortfolioItem
                  delay=".4s"
                  image="assets/img/home-one/portfolio/1.jpg"
                  category="Crime"
                  title="Cyber Crime Case"
                  date="18 Feb 2021"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="practice-details-item">
              <div className="blog-details-category">
                <ul>
                  <CategoryLink title="Criminal Law" />
                  <CategoryLink title="Civil Law" />
                  <CategoryLink title="Education Law" />
                  <CategoryLink title="Family Law" />
                  <CategoryLink title="Cyber Law" />
                </ul>
              </div>
              <div className="practice-details-contact">
                <h3>Contact Info</h3>
                <ul>
                  <ContactInfo
                    icon="flaticon-call"
                    contactType="Call"
                    contactDetail="+07 554 332 322"
                    href="tel:+07554332322"
                  />
                  <ContactInfo
                    icon="flaticon-email"
                    contactType="Email"
                    contactDetail="email&#160;protected"
                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#563e373e3e3d123e2b283d7c313d3f"
                  />
                  <ContactInfo
                    icon="flaticon-pin"
                    contactType="Address"
                    contactDetail="4th Floor, 408 No Chamber"
                  />
                </ul>
              </div>
              <div className="practice-details-brochures">
                <h3>Brochures</h3>
                <p>
                  Risus is commodo viverra maecenas accumsan lacus vel
                  facilisis. Quis is a ipsum suspendisse ultrices gravida
                </p>
                <a className="cmn-btn" href="#">
                  <i className="flaticon-download"></i>Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help-shape">
        <img src="assets/img/home-one/6.png" alt="Shape" />
      </div>
    </div>
  );
};

const PortfolioItem = ({ delay, image, category, title, date }) => (
  <div className="col-sm-6 col-lg-6">
    <div className={`portfolio-item wow fadeInUp`} data-wow-delay={delay}>
      <img src={image} alt="Portfolio" />
      <div className="portfolio-inner">
        <span>{category}</span>
        <h3>
          <a href="case-study-details.html">{title}</a>
        </h3>
        <p>{date}</p>
      </div>
    </div>
  </div>
);

const CategoryLink = ({ title }) => (
  <li>
    <a href="practice-details.html">
      {title}
      <i className="icofont-arrow-right"></i>
    </a>
  </li>
);

const ContactInfo = ({ icon, contactType, contactDetail, href }) => (
  <li>
    <i className={icon}></i>
    <a href={href}>
      {contactType} : {contactDetail}
    </a>
  </li>
);

export default PracticeDetailsArea;
