import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { GiProgression } from "react-icons/gi";
import { HiOutlineSupport } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className=" head-text">
        {" "}
        <span>Core Features</span>
      </h2>
      {/* <h3 className='about__core__features '>Our Core Features</h3> */}

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
            <p style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

      {/* // Achievements Block Start */}
      {/* <div className="achivements__header">
        <h2>Achievements</h2>
      </div> */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="achivements__blocks">
          <div className="blocks__item">
            <div className="blocks-icon">
              <GiProgression size={40} />
            </div>
            <div className="blocks-content">
              <h3>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={100} delay={0} duration={2} />
                  )}
                </span>
                % visa successful rate
              </h3>
              <p>
                We have 100% success rate for obtaining visa approvals for
                Germany. Our visa approval rate is higher when compared to other
                institutes.
              </p>
            </div>
          </div>

          <div className="blocks__item">
            <div className="blocks-icon">
              <VscServerProcess size={43} />
            </div>
            <div className="blocks-content">
              <h3>
                <span>
                  {counterOn && (
                    <CountUp start={0} end={1000} delay={0} duration={2} />
                  )}
                </span>
                + students already enrolled
              </h3>
              <p>
                More than 1000 students have enrolled in career@germany to learn
                German, with enrollment gradually increasing day by day.
              </p>
            </div>
          </div>

          <div className="blocks__item">
            <div className="blocks-icon">
              <HiOutlineSupport size={45} />
            </div>
            <div className="blocks-content">
              <h3>Online and offline section by experts</h3>
              <p>
                Our B2 qualified experts offer both online and offline courses
                for successful language learning, providing students with an
                initial learning curve.
              </p>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      {/* //Video Block Start */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
