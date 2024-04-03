import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

import { useDispatch } from "react-redux";
import { onUpdate } from "../../features/menuclicked/menuClicked";

const Dropdown = ({ submenus, dropdown }) => {
  // const menuSelect = useSelector((state) => state.menuClicker.value)
  const dispatch = useDispatch();
  return (
    <nav className={`dropdown-menu ${dropdown ? "show" : ""}`}>
      {submenus?.map((submenu, index) => (
        <li className="dropdown-menu-item" key={index}>
          <Link
            to={submenu.url}
            key={index}
            onClick={() => dispatch(onUpdate())}
          >
            {submenu.title}
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Dropdown;
