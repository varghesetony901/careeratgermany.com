import React, { useEffect } from "react";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";

import { Helmet } from "react-helmet-async";
import { MotionWrap } from "../../wrapper";
import "./Contact1.scss";

const Contact1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact - Career At Germany</title>
      </Helmet>
      <h2 className="head-text app__footer">
        <span>Enquire Now</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <AiFillMail size={30} />
          {/* <img src={images.email} alt="email" /> */}
          <a href="mailto:info@careeratgermany.com">info@careeratgermany.com</a>
        </div>
        <div className="app__footer-card">
          <BsTelephoneOutbound size={25} />
          {/* <img src={images.mobile} alt="phone" /> */}
          <a href="tel:+91 7994779575">+91 799 477 9575</a>
        </div>
      </div>

      <div className="contact-locations">
        <h2 className="">Office Locations</h2>

        <div className="contact-items">
        <div className="contact_items-item">
            <div>
              <img src="location3.jpg" alt="" />
            </div>
            <h4>Germany</h4>
            <a href="https://www.careeratgermany.de/en" target="_blank">
              <p>Blumenstrasse 8, 88444, Ummendorf, Germany</p>
            </a>
          </div>

          <div className="contact_items-item">
            <div>
              <img src="location1.jpg" alt="" />
            </div>
            <h4>Kothamangalam</h4>
            <a href="https://goo.gl/maps/ZUFmoxhQyhVC8wEH8" target="_blank">
              <p>
                KK Arcade, Kothamangalam Bypass Junction, near KCV Channel,
                Kothamangalam, Kerala 686691
              </p>
            </a>
          </div>

          <div className="contact_items-item">
            <div>
              <img src="location3.jpg" alt="" />
            </div>
            <h4>Perumbavoor</h4>
            <a href="https://maps.app.goo.gl/W3M5KJNVjUJvxau8A" target="_blank">
              <p>
                Jaya Hardwares Building, Opposite Elavumkudy Jewellers, AM Road,
                Perumbavoor, Kerala 683542
              </p>
            </a>
          </div>

          <div className="contact_items-item">
            <div>
              <img src="location2.jpg" alt="" />
            </div>
            <h4>Kottayam</h4>
            <a href="https://maps.app.goo.gl/GantG236Rdoq7TD19" target="_blank">
              <p>
                Trinity arcade Building, Athirampuzha Medical College Rd, near
                ICH hospital, Ammanchery, Kottayam, Kerala 686561
              </p>
            </a>
          </div>

          <div className="contact_items-item">
            <div>
              <img src="location3.jpg" alt="" />
            </div>
            <h4>Kozhikode</h4>
            <a href="https://maps.app.goo.gl/69EYGuet6PNgMFQi6" target="_blank">
              <p>
                2nd Floor, Amal Arcade, near St.Michael's School, West Hill,
                Kozhikode, Kerala 673005
              </p>
            </a>
          </div>
          <div className="contact_items-item">
            <div>
              <img src="location2.jpg" alt="" />
            </div>
            <h4>Kothamangalam Town</h4>
            <a href="https://maps.app.goo.gl/rGrKr2fdbCkqycwB6" target="_blank">
              <p>
                {" "}
                Mathson Chambers, NH85, Kochi-Dhanushkodi Road, near Aann's
                Ladies Hostel, Kothamangalam, Kerala 686691
              </p>
            </a>
          </div>

         

          <div className="contact_items-item">
            <div>
              <img src="location1.jpg" alt="" />
            </div>
            <h4>Kothamangalam City Tower </h4>
            <a href="https://maps.app.goo.gl/ctbSqhsPYvrkNZgE8" target="_blank">
              <p>
                Second floor, City Tower, near Police Station, Angady,
                Kothamangalam, Kerala 686691
              </p>
            </a>
          </div>

          <div className="contact_items-item">
            <div>
              <img src="location2.jpg" alt="" />
            </div>
            <h4>Ernakulam</h4>
            <a href="https://maps.app.goo.gl/WScMb5kWuyXutW3G9" target="_blank">
              <p>
                2nd Floor, KC Arcade, Thuthiyoor Rd, near Heiley Spaces Pvt Ltd,
                CSEZ, Kakkanad, Kerala 682037
              </p>
            </a>
          </div>

          
        </div>
      </div>

      <div className="contact-timing">
        <h2 className="">Working Hours</h2>
        <img src="worktime.jpg" alt="" />
        <div className="contact-items">
          <div>
            <h4>Monday - Saturday</h4>
            <p>09:00 am - 05:00 pm</p>
          </div>
          {/* <div>
            <h4>Saturday</h4>
            <p>09:00 am - 12:00 pm</p>
          </div> */}
          <div>
            <h4>Sunday</h4>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </>
  );
};

// export default Contact
export default MotionWrap(Contact1);
