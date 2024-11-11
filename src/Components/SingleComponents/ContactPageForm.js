import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

function ContactPageForm() {
  const { translations } = useTranslations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    msgSubject: "",
    message: "",
    recaptchaToken: "", 
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRecaptchaChange = (token) => {
    setFormData((prevState) => ({
      ...prevState,
      recaptchaToken: token,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      to: formData.email,
      subject: formData.msgSubject,
      message: `
                Name: ${formData.name}
                Phone: ${formData.phoneNumber}
                Message: ${formData.message}
            `,
      recaptchaToken: formData.recaptchaToken,
    };

    try {
      const response = await fetch("https://localhost:3000/api/Email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Email sent successfully.");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          msgSubject: "",
          message: "",
          recaptchaToken: "",
        });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="contact-form contact-form-four pb-100">
      <div className="loaction-area">
        <div className="container">
          <div className="row location-bg">
            <LocationItem
              title={translations.contactPageForm.location}
              icon="flaticon-pin"
              details={["2108-267 Road Quadra, Toronto, Victoria Canada"]}
            />
            <LocationItem
              title={translations.contactPageForm.phone}
              icon="flaticon-call"
              details={["+07 5554 3332 322", "+05 5596 2435 736"]}
            />
            <LocationItem
              title={translations.contactPageForm.email1}
              icon="flaticon-email"
              details={["info@example.com", "contact@example.com"]}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row contact-wrap">
            {["name", "email", "phoneNumber", "msgSubject"].map((field) => (
              <div key={field} className="col-sm-6 col-lg-6">
                <div className="form-group">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    id={field}
                    className="form-control"
                    required
                    placeholder={translations.contactPageForm[field]}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            ))}
            <div className="col-md-12 col-lg-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="8"
                  required
                  placeholder={translations.contactPageForm.message}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
              <div className="form-group">
                <ReCAPTCHA
                  sitekey="6LetmQYqAAAAANo_4ep6kQS61-Fra6O78XJlV3Dh"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
              <div className="text-center">
                <button type="submit" className="contact-btn">
                  {translations.contactPageForm.submit}
                </button>
              </div>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function LocationItem({ title, icon, details }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="location-item">
        <div className="location-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactPageForm;
