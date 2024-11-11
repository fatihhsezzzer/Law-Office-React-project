import React, { useState } from "react";
import { useTranslations } from "../Contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

function AppointmentForm() {
  const { translations } = useTranslations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    msgSubject: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
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
      recaptchaToken: recaptchaToken,
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
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div className="contact-form contact-form-two contact-form-three">
      <div className="container">
        <div className="contact-wrap">
          <form id="contactForm" onSubmit={handleSubmit}>
            <h2>{translations.appointmentForm.getAppointment}</h2>
            <div className="row">
              {Object.keys(formData).map((key) =>
                key !== "message" ? (
                  <div key={key} className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type={key === "email" ? "email" : "text"}
                        name={key}
                        id={key}
                        className="form-control"
                        required
                        data-error={
                          translations.appointmentForm[
                            `enter${key.charAt(0).toUpperCase() + key.slice(1)}`
                          ]
                        }
                        placeholder={translations.appointmentForm[key]}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                ) : (
                  <div key={key} className="col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea
                        name={key}
                        className="form-control"
                        id={key}
                        cols="30"
                        rows="8"
                        required
                        data-error={translations.appointmentForm.writeMessage}
                        placeholder={
                          translations.appointmentForm.caseDescription
                        }
                        value={formData[key]}
                        onChange={handleChange}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                )
              )}
              <div className="col-md-12 col-lg-12">
                <ReCAPTCHA
                  sitekey="6LetmQYqAAAAANo_4ep6kQS61-Fra6O78XJlV3Dh"
                  onChange={handleRecaptchaChange}
                />
                <div className="text-center">
                  <button type="submit" className="contact-btn">
                    {translations.appointmentForm.submitCase}
                  </button>
                </div>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
