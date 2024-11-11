import React, { useState } from "react";
import { useTranslations } from "../Contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const { translations } = useTranslations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    msgSubject: "",
    message: "",
    recaptchaToken: "", 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
      mail: formData.email,
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

      if (!response.ok) {
        const text = await response.text();
        console.error("Error:", text);
        alert("Failed to send email: " + text);
      } else {
        const result = await response.json();
        alert(result.message);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          msgSubject: "",
          message: "",
          recaptchaToken: "", 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="contact-form pb-100">
      <div className="location-area">
        <div className="container">
          <div className="row location-bg">
            <LocationItem
              icon="flaticon-pin"
              title={translations.contactForm.location}
              details={["Bahçelievler/İstanbul"]}
              linkText={translations.contactForm.viewOnMap}
            />
            <LocationItem
              icon="flaticon-email"
              title={translations.contactForm.email}
              details={[
                "info@fatihhsezer.com.tr",
                "contact@fatihhsezer.com.tr",
              ]}
            />
            <LocationItem
              icon="flaticon-call"
              title={translations.contactForm.phone}
              details={["+123 456 78 90"]}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="row contact-wrap">
            <TextInput
              name="name"
              placeholder={translations.contactForm.yourName}
              required={true}
              value={formData.name}
              handleChange={handleChange}
            />
            <TextInput
              name="email"
              type="email"
              placeholder={translations.contactForm.yourEmail}
              required={true}
              value={formData.email}
              handleChange={handleChange}
            />
            <TextInput
              name="phoneNumber"
              placeholder={translations.contactForm.yourPhone}
              required={true}
              value={formData.phoneNumber}
              handleChange={handleChange}
            />
            <TextInput
              name="msgSubject"
              placeholder={translations.contactForm.subject}
              required={true}
              value={formData.msgSubject}
              handleChange={handleChange}
            />
            <div className="col-md-12 col-lg-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="8"
                  required
                  placeholder={translations.contactForm.caseDescription}
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
                  {translations.contactForm.submitCase}
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

function LocationItem({ icon, title, details, linkText }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="location-item">
        <div className="location-icon">
          <i className={icon}></i>
          <img src="assets/img/home-one/12.png" alt="Shape" />
        </div>
        <h3>{title}</h3>
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {linkText && (
          <a
            className="location-link"
            target="blank"
            href="https://maps.app.goo.gl/Q7kVWCGbhBVSCVSp6"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}

function TextInput({
  name,
  type = "text",
  placeholder,
  required,
  value,
  handleChange,
}) {
  return (
    <div className="col-sm-6 col-lg-6">
      <div className="form-group">
        <input
          type={type}
          name={name}
          id={name}
          className="form-control"
          required={required}
          data-error="Please enter your information"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <div className="help-block with-errors"></div>
      </div>
    </div>
  );
}

export default ContactForm;
