import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";
import "./Header2.scss";

import CountdownTimer from "../../components/clock/CountdownTimer";

const Header2 = () => {
  const [date, setDate] = useState();
  const [imageName, setImageName] = useState();

  const query = '*[_type == "coursedate"]{timerDate}';
  const query1 = '*[_type == "coreImage"]';

  useEffect(() => {
    client.fetch(query).then((data) => {
      setDate(data[0].timerDate);
      // console.log(date);
    });

    client.fetch(query1).then((data) => {
      setImageName(data);
      // console.log(imageName);
    });
  }, []);
  const targetDate = date;

  return (
    <div className="header2_container-main">
      <div className="header__main">
        <div className="header__upper">
          {/* <div className="header__upper-left">
                        <h1>
                            Deutsch <br /> lernen mit <br />  <span> Experten </span>
                        </h1>
                        <div className='header__upper_join-btn'>
                            <Link to='/contact' >
                                <button>Enquire Now</button>
                            </Link>
                        </div>
                    </div> */}

          <div className="header__upper-left-updated">
            <div>
              <div className="header__upper-left-updated-build">
                <h5>Build Your Career With Us</h5>
              </div>
            </div>
            <h1>
              <Typewriter
                words={[" CAREER @ GERMANY"]}
                loop={2}
                cursor
                cursorStyle="!"
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h1>
            <h2>
              <Typewriter
                words={[" Bridge To Your Dreams"]}
                loop={2}
                cursor
                cursorStyle="_"
                typeSpeed={300}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h2>
            <Link to="https://applicant.careerpflege.com/" target="_">
              <div className="h4btn">
                <h4>Register Now</h4>

                <FiExternalLink size={25} />
              </div>
            </Link>
          </div>

          <div className="header__upper-right">
            <div className="header__upper_right-child">
              {/* <img src={images.student} */}
              {imageName && (
                <img src={urlFor(imageName[0].imgurl)} alt="student" />
              )}
            </div>
          </div>
        </div>

        <div className="header__lower">
          <Link to="https://applicant.careerpflege.com/" target="_">
            <div className="header__lower-left">
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="header__lower__left-masters"
              >
                <h2>Master's Admission</h2>
                <p>
                  Summer intake 2024 Masters admission is now open. Admissions
                  to top-ranked universities in Germany with ZERO tuition fees.
                </p>

                <div className="h4btn">
                  <h4>Apply Now</h4>

                  <FiExternalLink size={25} />
                </div>
              </motion.div>
            </div>
          </Link>

          <Link to="/courses">
            <div className="header__lower-center">
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="header__lower__left-timer"
              >
                <h2>Next German Batch Starts In</h2>

                <div className="header__lower__left-clock">
                  {/* <CountdownTimer  /> */}
                  <CountdownTimer targetDate={targetDate} />
                </div>
                <div className="clock_data">
                  <h3>Days </h3>
                  <h3>Hour</h3>
                  <h3>Mins</h3>
                  <h3>Secs</h3>
                </div>
                <div className="h4btn">
                  <h4>Book Now</h4>

                  <FiExternalLink size={25} />
                </div>
              </motion.div>
            </div>
          </Link>

          {/* <button className='master__course__enroll-btn'>Enroll Now</button> */}

          {/* <a
            href={`https://wa.me/+917994779575?text=I would like to enroll for FSJ / Ausbildung. Expecting an early reply. Thank you!`}
            target="_blank"
          > */}

          <Link to="https://applicant.careerpflege.com/" target="_">
            <div className="header__lower-right">
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="header__lower__left-fsj"
              >
                <h2>FSJ/Ausbilding Admission</h2>
                <p>
                  Admissions to FSJ/ Ausbuildung Nursing Programs. Admissions to
                  top-ranked universities in Germany with ZERO tuition fees.
                </p>

                <div className="h4btn">
                  <h4>Apply Now</h4>

                  <FiExternalLink size={25} />
                </div>
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header2, "home");
