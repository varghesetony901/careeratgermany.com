import React, { useEffect, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";

import { client } from "../../client";
import { MotionWrap } from "../../wrapper";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    course: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, contactNumber, email, course, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const enroll = {
      _type: "enroll",
      name: formData.username,
      contactNumber: formData.contactNumber,
      email: formData.email,
      course: formData.course,
      message: formData.message,
    };

    client
      .create(enroll)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isFormSubmitted]);

  return (
    <>
      <h2 className="head-text app__footer">
        <span>Enroll Now</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <AiFillMail size={30} />
          {/* <img src={images.email} alt="email" /> */}
          <a href="mailto:careeratgermany@gmail.com" className="p-text">
            careeratgermany@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <BsTelephoneOutbound size={25} />
          {/* <img src={images.mobile} alt="phone" /> */}
          <a href="tel:+91 7994779575" className="p-text">
            +91 799 477 9575
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="number"
              placeholder="Your Contact Number"
              name="contactNumber"
              value={contactNumber}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <select
              className="p-text"
              name="course"
              onChange={handleChangeInput}
            >
              <option value="Level A1">Level A1</option>
              <option value="Level A2">Level A2</option>
              <option value="Level B1">Level B1</option>
              <option value="Level B2">Level B2</option>
              <option value="A1 Intensive">A1 Intensive</option>
              <option value="A2 Intensive">A2 Intensive</option>
              <option value="B1 Intensive">B1 Intensive</option>
              <option value="B2 Intensive">B2 Intensive</option>
              <option value="Medical German">Medical German</option>
              <option value="Interview Preperation">
                Interview Preperation
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="contact__feedback">
          <p className="contact__feedback-msg">
            You will be contacted by one of our representative shortly!
          </p>
        </div>
      )}
    </>
  );
};

// export default Contact
export default MotionWrap(EnrollForm);
