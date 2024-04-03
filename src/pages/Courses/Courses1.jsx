import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import "./Courses.scss";

import { Helmet } from "react-helmet-async";
import { MotionWrap } from "../../wrapper";

const Courses = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query = '*[_type == "courses"] | order(_createdAt asc)';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }
  };

  return (
    <>
      <Helmet>
        <title>Courses - Career At Germany</title>
      </Helmet>
      <h2 className="head-text blog_header">
        <span>Language Courses</span>
      </h2>

      <div className="master__courses-desc">
        <div className="desc__header">
          <h2>Learn German with Experts. </h2>
        </div>

        <p>
          Every student admitted to our German language training programme is
          taught the fundamentals of the German language using effective study
          materials created by our top expert German linguists. This will
          contribute to building a strong foundation and confidence in all our
          students who want to gain German language skills. Carrer@Germany
          incorporates various multimedia resources, such as videos, audio
          recordings, and online resources, to create an engaging and
          interactive learning environment. Our expert German language
          instructors have collaborated with the language pioneers in Germany to
          create activity classes that encourage our students to learn the
          language using role-playing, games, chart making, note creation, and
          elocutions. Students will also learn about German culture in activity
          classes, which will help them understand the context of the language.
        </p>
      </div>

      <div className="app__work-filter">
        {[
          "Language Basic",
          "Language Intensive",
          "Medical German",
          "Exam Preparation",
          "Interview Preparation",
          "German Fluency Class",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>

              <div className="content__container">
                <div className="work__details__info-left">
                  <div className="price__div">
                    <p className=""> Price :</p>
                  </div>
                  <p className=""> Duration :</p>
                  <p className=""> Availability :</p>
                  <p className=""> Next Batch :</p>
                  <p className=""> Seats Left :</p>
                </div>
                <div className="work__details__info-right">
                  <div className="price__div">
                    <h3 className=""> {work.price}</h3>
                  </div>
                  <h3 className=""> {work.duration}</h3>
                  <h3 className=""> {work.availability}</h3>
                  <h3 className=""> {work.next_batch}</h3>
                  <h3 className=""> {work.seats_left}</h3>
                </div>
              </div>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/+917994779575?text=I would like to enroll for ${work.title}. Expecting an early reply. Thank you!`}
              target="_blank"
            >
              <button className="work__enroll-btn">Enroll Now</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

// export default Courses
export default MotionWrap(Courses);
