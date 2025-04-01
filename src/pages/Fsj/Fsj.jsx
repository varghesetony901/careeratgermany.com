import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FileUpload from "../../components/fileUpload/FileUpload";
import { MotionWrap } from "../../wrapper";
import "./Fsj.scss";

const Fsj = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>FSJ - Ausbilding - Career At Germany</title>
      </Helmet>
      <h1 className="fsj__header head-text">
        <span>FSJ</span>
      </h1>
      <div className="fsj__container">
        <div className="fsj__container-info">
          <h2>What Is FSJ In Germany?</h2>
          <p>
            FSJ stands for "Freiwilliges Soziales Jahr," which translates to
            "Voluntary Social Year" in English. It is a program in Germany that
            allows young people to do voluntary work in social, ecological, or
            cultural areas for a duration of 6 to 18 months.
          </p>
          <p>
            The program is open to individuals between the ages of 16 and 27,
            who have completed their compulsory education, and wish to engage in
            social work, gain practical experience, and contribute to society.
            FSJ participants receive a monthly allowance and are covered by
            health and social insurance.
          </p>

          <div className="info__till-1300px">
            <p>
              Students looking for engineering programs in various
              specializations can opt for a wide variety of engineering courses
              at German universities. Also, students at German universities can
              build connections and gain knowledge in a huge multicultural
              environment. Germany offers a high standard of living and abundant
              opportunities for engineers on the job market.
            </p>
          </div>
        </div>
        <div className="fsj__container-image">
          <img src="../fsj1.jpg" />
        </div>
      </div>
      <div className="info__from-1300px">
        <p>
          Students looking for engineering programs in various specializations
          can opt for a wide variety of engineering courses at German
          universities. Also, students at German universities can build
          connections and gain knowledge in a huge multicultural environment.
          Germany offers a high standard of living and abundant opportunities
          for engineers on the job market.
        </p>
      </div>

      <h1 className="head-text">
        <span>Ausbildung</span>
      </h1>
      <div className="ausbilding_container">
        <p>
          In Germany, the education and training of nurses is highly regarded,
          and the profession is held in high esteem. The German nursing
          education system is based on a three-year vocational training program,
          known as "Ausbildung," which provides students with a comprehensive
          and practical education in nursing. The Ausbildung program in nursing
          is offered by vocational schools and is regulated by the German
          government. The program consists of both theoretical and practical
          components, and is designed to provide students with the knowledge,
          skills, and hands-on experience required to work as professional
          nurses.
        </p>

        <p>
          Theoretical components of the Ausbildung program include courses in
          nursing theory, medical terminology, anatomy, pharmacology, and
          ethics. Practical components include clinical rotations in hospitals
          and other healthcare settings, where students have the opportunity to
          work alongside experienced nurses and healthcare professionals. The
          Ausbildung program in nursing is highly structured and rigorous.
          Students are required to complete a set number of hours of classroom
          instruction and clinical practice, and must pass a series of exams to
          graduate. The program is designed to prepare students for the national
          nursing exam, which is required for licensure as a nurse in Germany.
        </p>

        <div className="aus_image">
          <img src="../learn1.jpg" alt="" />
          <img src="../learn2.jpg" alt="" />
        </div>
        <p>
          Upon completing the Ausbildung program in nursing, graduates are
          qualified to work as professional nurses in a variety of healthcare
          settings. They may work in hospitals, clinics, nursing homes, home
          healthcare agencies, and other healthcare facilities. One of the key
          benefits of the Ausbildung program in nursing is that it provides
          students with a comprehensive and practical education in nursing.
          Students have the opportunity to work alongside experienced nurses and
          healthcare professionals, gaining hands-on experience in a variety of
          healthcare settings. This experience is invaluable for developing the
          skills and knowledge required to be an effective nurse. Another
          benefit of the Ausbildung program in nursing is that it is highly
          respected in Germany. The program is regulated by the government,
          ensuring that students receive a high-quality education that meets the
          standards of the nursing profession. This has helped to establish
          nursing as a well-respected and sought-after profession in Germany.
        </p>
      </div>
      <div className="file_upload_masters">
        <FileUpload query='*[_type == "fileUpload"]{"url": ausbildung.asset->url}' />
      </div>
    </>
  );
};

// export default Fsj
export default MotionWrap(Fsj);
