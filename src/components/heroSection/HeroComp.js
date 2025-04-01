import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroComp.scss";

const HeroComp = () => {
  return (
    <>
      <div className="hero_comp-container">
        <h1>
          Welcome to{" "}
          <span style={{ color: "rgb(6, 60, 160)" }}>
            <Typewriter
              words={[" Career @ Germany"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        {/* <h1 >
                    <Typewriter
                        words={['Bridge To Your Dreams.']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1> */}
      </div>
    </>
  );
};

export default HeroComp;
