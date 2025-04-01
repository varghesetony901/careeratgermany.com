import React, { useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { MotionWrap } from "../../wrapper";

import "./Jobs.scss";

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const textMessage1 = "German Language Trainer";
  const textMessage2 = "Content Creator";
  const textMessage3 = "Telecaller";
  const textMessage4 = "Front Office Executive";
  const textMessage5 = "Educational Counsellor";
  const textMessage6 = "IELTS Trainer";
  const textMessage7 = "Internship";
  return (
    <>
      <Helmet>
        <title>Jobs - Career At Germany</title>
      </Helmet>
      <div className="jobs_main-container">
        <h2 className="head-text blog_header">
          <span>Join Our Team</span>
        </h2>

        <p>
          Our curiosity runs deep. That's why we let you explore new paths at
          your own speed — making sure you're constantly learning. Discover the
          possibilities. Explore the following job profiles and find the best
          matches you.{" "}
        </p>

        <div className="job-container">
          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../trainer1.jpg" alt="" />
              <h3>German Language Trainer</h3>
            </div>
            <div>
              <p>
                Role - German language trainer.
                <br />
                Location- Kothamangalam
                <br />
                Description - German language B2 level trainers are required for
                offline training.
                <br /> Requirements
                <br />
                B2 certification preferred.
                <br />
                Planning and delivering lessons
                <br />
                Setting and marking assignments.
                <br /> Assessing and recording student progress.
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage1} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../content1.jpg" alt="" />
              <h3>Content Creator</h3>
            </div>
            <div>
              <p>
                Role - Creating short content for the publicity of the
                institute. <br />
                Responsibilities - Writing, reviewing, Acting, and updating
                contents . <br />
                Expert in short-form content like short video platforms like
                reels. <br />
                Work collaboratively with other team members.
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage2} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../telecaller1.jpg" alt="" />
              <h3>Telecaller</h3>
            </div>
            <div>
              <p>
                Role - Obtaining and updating list of individuals contact
                details. <br />
                Calling active and budding clients to encourage the purchase of
                items. Should be able to convince and clear query of clients on
                phone call. <br />
                Responsibilities - Addressing client’s uncertainties,
                grievances, and suggestions on time. <br />
                Noting important details of each conversation. <br />
                Benefits - Cell phone reimbursement. <br />
                Flexible schedule <br />
                Supplemental pay types. <br />
                Commission pay
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage3} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../frontoffice1.jpg" alt="" />
              <h3>Front Office Executive</h3>
            </div>
            <div>
              <p>
                Job role-Front Office Executive <br />
                Description- Perform typical clerical duties. <br />
                Provide administrative support to staff. <br />
                To respond to each client who approaches. <br />
                Handling complaints with good communication skills
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage4} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../counsellor1.jpg" alt="" />
              <h3>Educational Counsellor</h3>
            </div>
            <div>
              <p>
                Job role- Giving suggestions about education-related aspects.{" "}
                <br />
                Should have strong convincing skills & good command over
                English. <br />
                The candidate should be innovative and motivating. <br />
                Knowledge about overseas education will be an additional
                advantage. <br />
                Telephonic follow-ups to the walk-ins after the counseling
                walk-ins. <br />
                Must have a flair for public speaking.
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage5} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../ielts1.jpg" alt="" />
              <h3>IELTS Trainer</h3>
            </div>
            <div>
              <p>
                Job role-English languageTrainer. <br />
                Responsibilities-Prepare and deliver lectures on different
                modules of IELTS. <br />
                Helping students with their modules and guiding them to achieve
                their desired scores. <br />
                Eligibility - Should have excellent oral, written, and
                presentation skills. <br />
                Ability to retain the interest of learners in the class. <br />
                Presentable and equipped with student-handling skills. <br />
                Self-motivated and independent at work.
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage6} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="jobs-single">
            <div className="jobs_single-left">
              <img src="../internship1.jpg" alt="" />
              <h3>Internship</h3>
            </div>

            <div>
              <p>
                Job Title: Internship for Marketing, Editing, Content Creation,
                and Business Development. <br />
                Location: Kothamangalam. <br />
                Duration: 3 months <br />
                Job Description - We are seeking highly motivated individuals
                who are interested in gaining valuable experience in the fields
                of marketing, editing, content creation, and business
                development. The successful candidate will work closely with our
                team to assist in the development and implementation of
                marketing campaigns, editing and creating high-quality content,
                and supporting business development initiatives. <br />
                Benefits - Gain valuable experience in the fields of marketing,
                editing, content creation, and business development. <br />
                Work with a talented and supportive team of professionals.{" "}
                <br />
                Opportunity to learn and grow in a dynamic and fast-paced
                environment. <br />
                Possibility of future employment opportunities within the
                company.
              </p>
              <div className="jobs_apply-button">
                <a
                  href={`https://wa.me/+917994779575?text=I would like to apply for ${textMessage7} position. Expecting an early reply. Thank you!`}
                  target="_blank"
                >
                  <button>Apply Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotionWrap(Jobs);
