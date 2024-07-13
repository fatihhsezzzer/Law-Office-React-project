import React from "react";

function AttorneyDetails() {
  return (
    <div className="attorney-details pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="attor-details-item">
              <img src="assets/img/attorney-details/1.jpg" alt="Details" />
              <div className="attor-details-left">
                <div className="attor-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="attor-social-details">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="flaticon-call"></i>
                      <a href="tel:+07554332322"> Call : +07 554 332 322 </a>
                    </li>
                    <li>
                      <i className="flaticon-email"></i>
                      <a href="mailto:info@example.com">[email protected]</a>
                    </li>
                    <li>
                      <i className="flaticon-pin"></i>
                      4th Floor, 408 No Chamber
                    </li>
                  </ul>
                </div>
                <div className="attor-work">
                  <h3>Working hours</h3>
                  <div className="attor-work-left">
                    <ul>
                      <li>Monday</li>
                      <li>Tuesday</li>
                      <li>Sunday</li>
                    </ul>
                  </div>
                  <div className="attor-work-right">
                    <ul>
                      <li>9:00 am - 8:00 pm</li>
                      <li>9:00 am - 8:00 pm</li>
                      <li>9:00 am - 8:00 pm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="attor-details-item">
              <div className="attor-details-right">
                <div className="attor-details-name">
                  <h2>Adv. Sarah Taylor</h2>
                  <span>Public Prosecutor</span>
                  <p>Bachelor of Laws in LL.B. (Hons) in the United Kingdom</p>
                </div>
                <div className="attor-details-things">
                  <h3>Biography</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="attor-details-things">
                  <h3>Education</h3>
                  <ul>
                    <li>
                      PHD degree in Criminal Law at University of Lyzo
                      Internatinal (2006)
                    </li>
                    <li>
                      Master of Family Law at University of Lyzo International
                      (2002)
                    </li>
                  </ul>
                </div>
                <div className="attor-details-things">
                  <h3>Research</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttorneyDetails;
