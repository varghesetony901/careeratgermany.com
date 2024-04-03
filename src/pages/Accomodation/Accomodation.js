import React, { useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { MotionWrap } from "../../wrapper";
import "./Accomodation.scss";

const Accomodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Accommodation - Career At Germany</title>
      </Helmet>

      <div className="accomodation-container">
        <h2 className="head-text blog_header">
          <span>Accommodation in Germany</span>
        </h2>
        <div className="accommodation-images">
          <img src="../room.jpg" />
          <img src="../room1.jpg" />
        </div>
        <p>
          If you want to study at a German higher education institution, you
          will have to arrange your own accommodation. In some cities that can
          be quite difficult, so it's a good idea to start searching for
          somewhere to live early on. Whether you are a student or an employee,
          you have come to the right place. You get accommodation in any city in
          Germany. Register now to commute faster.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeO3wU7b5PLNh90ulZxAp3KY3mRuc04POhXn3X_s30vly4G4Q/viewform"
          target="_blank"
        >
          <button className="">Register Now</button>
        </a>
      </div>
    </>
  );
};

export default MotionWrap(Accomodation);
