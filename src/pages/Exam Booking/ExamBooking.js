import React from "react";

import { Helmet } from "react-helmet-async";
import { MotionWrap } from "../../wrapper";

const ExamBooking = () => {
  return (
    <>
      <Helmet>
        <title>Goethe Exam Booking - Career At Germany</title>
      </Helmet>
      <div className="accomodation-container">
        <h2 className="head-text blog_header">
          <span>Welcome to Career @ Germany Goethe Exam Booking System</span>
        </h2>
        <div className="accommodation-images">
          <img src="../exam1.jpg" />
          <img src="../exam2.jpg" />
        </div>
        <p>
          Welcome to our dedicated platform, where we're committed to assisting
          students in their pursuit of excellence in the Goethe-Institut
          examinations. Our mission is to streamline the process of finding and
          accessing Goethe exam centers, making it easier than ever for you to
          achieve your language learning goals. Whether you're preparing for the
          Goethe-Zertifikat, Goethe-Test PRO, or any other Goethe exam, we
          provide a user-friendly and comprehensive resource to help you locate
          the nearest exam centers, understand registration requirements, and
          access essential information. Navigate your path to success with
          confidence, knowing that we're here to support you every step of the
          way in your language proficiency journey.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdDU9xrXRBx3eAPeIegYSwQQb4UpcRLCVVi7L2lGk7msdHjDg/viewform"
          target="_blank"
        >
          <button className="">Register Now</button>
        </a>
      </div>
    </>
  );
};

export default MotionWrap(ExamBooking);
