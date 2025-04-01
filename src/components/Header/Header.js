import React from "react";
import Navbar from "./Navbar";

import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Header.scss";

import { useDispatch, useSelector } from "react-redux";
import { onUpdate } from "../../features/menuclicked/menuClicked";

const Header = () => {
  // const [toggle, setToggle] = useState(false);
  // const [submenu, setSubmenu] = useState(false);
  const menuSelect = useSelector((state) => state.menuClicker.value);
  const dispatch = useDispatch();

  return (
    <div>
      <motion.nav
        // whileInView={{ opacity: [0, 1] }}
        whileInView={{ y: [-80, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, delayChildren: 0.5 }}
        className="app__navbar"
      >
        <div className="app__navbar-logo">
          <Link to="/">
            <img src={images.cr2} alt="logo" />
          </Link>
        </div>
        <div className="app__navbar-links">
          <Navbar />
        </div>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => dispatch(onUpdate())} />

          {menuSelect && (
            <div className="app_navbar-menu-container">
              <motion.div
                className="app_navbar-menu-container-items"
                transition={{ duration: 0.4 }}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
              >
                <div className="app_navbar-menu-navcomp">
                  <Navbar />
                </div>
                <HiX onClick={() => dispatch(onUpdate())} />
              </motion.div>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;
