import React from "react";
import { Helmet } from "react-helmet-async";
import Accordion from "../../components/accordion/Accordion";
import { MotionWrap } from "../../wrapper";
import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq_header">
      <Helmet>
        <title>FAQ - Career At Germany</title>
      </Helmet>

      {/* <Test/> */}
      <h1 className="head-text">
        {" "}
        <span> FAQ </span>
      </h1>

      <Accordion />
    </div>
  );
};

export default MotionWrap(Faq);
