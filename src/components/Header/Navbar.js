import React from "react";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <>
      {menuItems.map((menu, index) => (
        <MenuItems items={menu} key={index} />
      ))}
    </>
  );
};

export default Navbar;
