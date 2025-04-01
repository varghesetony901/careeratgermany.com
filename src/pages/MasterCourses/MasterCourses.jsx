import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";

import { Helmet } from "react-helmet-async";
import FileUpload from "../../components/fileUpload/FileUpload";
import GradeCalculator from "../../components/gradeCalculator/GradeCalculator";
import { MotionWrap } from "../../wrapper";
import "./MasterCourses.scss";

const MasterCourses = () => {
  const [masterCourses, setMasterCourses] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [masterTags, setMasterTags] = useState([]);

  useEffect(() => {
    const query1 =
      '*[_type == "master_courses"] | order(_createdAt asc){ title, imgUrl, description, tags-> {title}}';

    const query2 = '*[_type == "masterTags"] | order(_createdAt asc)';

    client.fetch(query1).then((data) => {
      setMasterCourses(data);
      setFilterCourses(data);
      // console.log(data);
    });

    client.fetch(query2).then((data) => {
      setMasterTags(data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // console.log(item);

    if (item === "All") {
      // setActiveFilter('All');
      setFilterCourses(masterCourses);
    } else {
      setActiveFilter(item);
      setFilterCourses(
        masterCourses.filter((courses) => courses.tags.title.includes(item))
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Master Courses - Career At Germany</title>
      </Helmet>
      {/* <div className='head-text master__courses__header'>Master Courses</div> */}
      <h2 className="head-text blog_header">
        <span>Master Courses</span>
      </h2>

      <div className="master__courses-desc">
        <div className="desc__header">
          <h2>Admissions To Top Ranked Universities In Germany </h2>
          <h2>With ZERO Tuition Fees. </h2>
        </div>

        <p>
          Germany is the hub of research and development in engineering and
          technology. Most engineering-based companies in the automotive,
          manufacturing and consulting industries are headquartered in Germany
          and have factories there. This is the main reason why Germany is the
          top study destination for many aspiring engineers. Another attractive
          feature is that university tuition in Germany is either very
          affordable or nonexistent. Top-ranking universities in Germany offer
          Engineering programs that are completely taught in English.
          Career@Germany has trained numerous professionals in the German
          language up to B2-level if your preferred program is in German.
          Students looking for engineering programs in various specializations
          can opt for a wide variety of engineering courses at German
          universities. Also, students at German universities can build
          connections and gain knowledge in a huge multicultural environment.
          Germany offers a high standard of living and abundant opportunities
          for engineers on the job market.
        </p>
      </div>
      <div className="grade_calc">
        <GradeCalculator />
      </div>

      <div className="master__course-filter">
        {masterTags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item.title)}
            className={`master__course__filter-item app__flex p-text ${
              activeFilter === item.title ? "item-active" : ""
            }`}
          >
            {item.title}
          </div>
        ))}

        <p
          onClick={() => handleWorkFilter("All")}
          className={`master__course__filter-item app__flex p-text ${
            activeFilter === "All" ? "item-active" : ""
          }`}
        >
          All
        </p>
      </div>

      <div className="app__master__course-portfolio">
        {filterCourses.map((courses, index) => (
          <div className="app__master__course-item app__flex" key={index}>
            <div className="app__master__course-img app__flex">
              <img src={urlFor(courses.imgUrl)} alt={courses.name} />
            </div>

            <div className="app__master__course-content app__flex">
              <h4 className="bold-text">{courses.title}</h4>
              <div className="master__course__content__container">
                <p>{courses.description}</p>
              </div>

              <div className="app__master__course-tag app__flex">
                <h1 className="p-text">{courses.tags.title}</h1>
              </div>
            </div>
            {/* <Link to='/contact'>
                            <button className='master__course__enroll-btn'>Enquire Now</button>
                        </Link> */}
            <a
              href={`https://wa.me/+917994779575?text=I would like to enroll for ${courses.title}. Expecting an early reply. Thank you!`}
              target="_blank"
            >
              <button className="master__course__enroll-btn">Enroll Now</button>
            </a>
          </div>
        ))}
      </div>

      <div className="file_upload_masters">
        <FileUpload query='*[_type == "fileUpload"]{"url": masterfile.asset->url}' />
      </div>
    </>
  );
};

export default MotionWrap(MasterCourses);
