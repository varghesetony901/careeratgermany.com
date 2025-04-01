import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./MenuItems.scss";

import { useDispatch } from "react-redux";
import { onUpdate } from "../../features/menuclicked/menuClicked";

const MenuItems = ({ items }) => {
  // const menuSelect = useSelector((state) => state.menuClicker.value)
  const dispatch = useDispatch();
  const [child, setChild] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setChild(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setChild(false);
  };

  return (
    <>
      <li className="menuItems-list">
        {items.submenu ? (
          <>
            <nav
              to={items.url}
              onClick={() => setChild(!child)}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {items.title}
              <Dropdown submenus={items.submenu} dropdown={child} />
            </nav>
          </>
        ) : (
          <>
            <Link to={items.url} onClick={() => dispatch(onUpdate())}>
              {items.title}
            </Link>
          </>
        )}
      </li>
    </>
  );
};

export default MenuItems;
