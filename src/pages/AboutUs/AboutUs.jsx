import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { MotionWrap } from "../../wrapper";
import "./AboutUs.scss";

import { Helmet } from "react-helmet-async";
import { AiOutlineRead } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import { SiSessionize } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const AboutUs = () => {
  const [teamPics, setTeamPics] = useState([]);
  const [teamTags, setTeamTags] = useState([]);
  const [filterTeam, setFilterTeam] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const query =
      '*[_type == "team"] | order(_createdAt asc) { title, imgUrl,category, tags-> {title}}';
    const query2 = '*[_type == "teamTags"] | order(_createdAt asc)';
    client.fetch(query).then((data) => {
      setTeamPics(data);
      setFilterTeam(data);
      // console.log(data);
    });

    client.fetch(query2).then((data) => {
      setTeamTags(data);
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
      setFilterTeam(teamPics);
    } else {
      setActiveFilter(item);
      setFilterTeam(teamPics.filter((team) => team.tags.title.includes(item)));
    }
  };

  return (
    <div className="aboutus__main">
      <Helmet>
        <title>About us - Career At Germany</title>
      </Helmet>
      <div className="aboutus__header">
        <h1 className="head-text">
          {" "}
          <span> About Us </span>{" "}
        </h1>
      </div>

      <div className="aboutus__about">
        <h2 className="head-text">
          Career @ Germany. <span>Bridge to your Dreams.</span>
        </h2>
        <div className="aboutus__desc">
          <p>
            The Career@Germany in Kothamangalam was established in the year 2017
            with the primary objectives of giving guidance to the students who
            targeting Germany as their dream country for studies. In 2020, we
            started German Language coaching as per the request of the students
            who pursued studies in Germany through our Guidance. The well
            experienced faculties with advanced learning experiences make our
            institute more popular in the Kothamangalam region. The online
            interactive Sessions with German natives is the key feature of
            Career@Germany. So we strongly believe Career@Germany will be your
            right choice to learn the German Language.
          </p>
        </div>
      </div>

      <div className="about__features">
        <div className="features__card">
          <div className="card-icon">
            <AiOutlineRead size={60} />
          </div>
          <p>High quality training with well Experienced faculties.</p>
        </div>

        <div className="features__card">
          <div className="card-icon">
            <SiSessionize size={60} />
          </div>
          <p>Online Interactive sessions with German Natives.</p>
        </div>

        <div className="features__card">
          <div className="card-icon">
            <BiTimer size={60} />
          </div>
          <p>Class Timings according to student’s preference.</p>
        </div>

        <div className="features__card">
          <div className="card-icon">
            <GiStairsGoal size={60} />
          </div>
          <p>
            The learning material is coordinated with your knowledge and goals.
          </p>
        </div>

        <div className="features__card">
          <div className="card-icon">
            <VscServerProcess size={60} />
          </div>
          <p>Well trained staffs for admission guidance and Visa processing.</p>
        </div>
      </div>

      <div className="mission_main">
        <div className="mission__card">
          <h2>Our Mission</h2>
          <p>
            Those who are aiming Germany for their higher studies or settle
            there after studies do not worry about reaching their dream land.
            Our mission is to provide academic strength and guidance to fulfill
            their dream.
          </p>
        </div>

        <div className="mission__card">
          <h2>Our Vision</h2>
          <p>
            To become the most customer satisfactory German language institute
            and an educational Consultancy, which sets the highest benchmark for
            the growing German language institutes.
          </p>
        </div>
      </div>

      <div className="faculties__main">
        <div className="faculties__main-header1">
          <h1>High Quality Training With Well Experienced Faculties.</h1>
        </div>
        <div className="faculties__section1">
          <div className="faculties-desc">
            <p>
              We offer skilled teaching by proffessional teachers who've
              qualified B2 level education. Individual attention are given for
              each students.We ensure high quality training for each
              student.Prioritizing training programs are conducted by expertised
              trainers.We focus on building skills of each student. Improved
              quality of teaching and continuous monitoring and Supportive and
              helping hands are offered to the students by our staffs and
              teachers to improve their language skill and make them more
              talented.We make sure that the training materials cover everything
              that needs to be taught so that I would be easy for the students
              to learn .Our goal is to improve one's capacity, capability,
              performance and productivity.
            </p>
          </div>

          <div className="faculties__desc-img">
            <img src="./why-learn.jpg" />
          </div>
        </div>
      </div>

      <div className="about__features">
        <div className="features__card-bottom">
          <div className="card-icon">
            <AiOutlineRead size={60} />
          </div>
          <p>Online Interactive Sessions.</p>
          <div className="faculties__online">
            <p>
              The chief aim of studying a foreign language is to communicate in
              a good with the native people who are living in that country.
              However ,for every student the main difficulty is faced in the
              area of communicating with the native people. We provide free
              training from German natives.
            </p>
          </div>
        </div>

        <div className="features__card-bottom">
          <div className="card-icon">
            <SiSessionize size={55} />
          </div>
          <p>Curriculum coordinates with your objectives.</p>
          <div className="faculties__online">
            <p>
              In the classroom, teachers have access to a wide range of
              materials and techniques to facilitate effective learning. To
              ensure this, it's important that study materials are carefully
              selected to support instructions and provide information about
              professional learning needs.
            </p>
          </div>
        </div>
      </div>

      <div className="team__header">
        <h1>Our Founders</h1>
        <div className="app__profile">
          <div className="app__profiles-item">
            <img src="../jomy.jpg" alt="" />
            <h4>Jomy Joseph</h4>
            <p>CEO</p>
          </div>

          <div className="app__profiles-item">
            <img src="../bijith.jpg" alt="" />
            <h4>Bijith Kurian</h4>
            <p>Managing Director</p>
          </div>
        </div>
        <h1>Meet Our Experienced Team Members</h1>
      </div>

      <div className="master__course-filter">
        {teamTags.map((item, index) => (
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
      <div className="app__profile">
        {filterTeam.map((item, index) => (
          <div className="app__profiles-item" key={index}>
            <img src={urlFor(item.imgUrl)} alt={teamPics.name} />
            <h4>{item.title}</h4>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default AboutUs
export default MotionWrap(AboutUs);
