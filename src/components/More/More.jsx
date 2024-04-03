import React, { useState } from "react";

import "./More.scss";

const More = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="more__container">
      <div onClick={() => setActive(!active)}>More</div>
      <div className={active ? "more_show" : "more_hide"}>
        <ul>
          <li>FAQ</li>
          <li>Gallery</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default More;
