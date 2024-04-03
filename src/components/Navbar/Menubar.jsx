import React from 'react'
import { menuItems } from '../menuItems'
import { Link } from 'react-router-dom'
// import './Menubar.scss'
const Menubar = () => {
  return (
    <nav>
      <ul className="menubar_container">
        {menuItems.map((menu, index) => {
          return (

            <li className="menubar-items" key={index}>
                <div></div>
              <Link to={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Menubar