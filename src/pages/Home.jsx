import React, { useEffect } from "react";
import Video from "../components/Video/Video";
import { About, Testimonial } from "../container";
import Header2 from "../container/Header/Header2";
import { MotionWrap } from "../wrapper";

import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home - Career At Germany</title>
      </Helmet>
      {/* <HeroComp/> */}

      <Header2 />
      <About />
      <Video />
      <Testimonial />
    </div>
  );
};

// export default Home
export default MotionWrap(Home);
