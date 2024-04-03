import React from "react";
import { RiArrowDropUpFill } from "react-icons/ri";
import "./Copyright.scss";
const Copyright = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };
  return (
    <div className="copyright_container">
      <div className="circle_bg_container" onClick={() => moveToTop()}>
        <div className="circle_bg_top">
          <RiArrowDropUpFill color="yellow" size={50} />
        </div>
      </div>
      <div className="copyright_text">
        <p>© 2023 Career@Germany | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Copyright;
