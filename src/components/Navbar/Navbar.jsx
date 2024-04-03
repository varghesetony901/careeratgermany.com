import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../../constants";
// import './Navbar.scss';
import Menubar from "./Menubar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      // whileInView={{ opacity: [0, 1] }}
      whileInView={{ y: [-80, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7, delayChildren: 0.5 }}
      className="app__navbar"
    >
      <div className="app__navbar-logo">
        <img src={images.cr2} alt="logo" />
      </div>
      <div>
        <Menubar />
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            transition={{ duration: 0.4 }}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
