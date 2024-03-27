import '../components/NavigationCss.css'
import { Link } from 'react-router-dom'
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import MenuData from '../data/MenuData';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <aside>
      <div className="navbar">
        <div className="nav-toggle">
          <Link to="#" className="menu-bar">
            <FaBars
              style={{ color: 'darkblue', paddingTop: '3px' }}
              onClick={toggleMenu}
            />
          </Link>
        </div>
        <div>
          kanokwan ☺ | 2024
        </div>
      </div>

      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <div className='nav-item-close'>
          <FaXmark
            style={{ color: 'plum', paddingTop: '3px' }}
            onClick={toggleMenu}
            className='close'
          />
        </div>
        <ul className='nav-menu-item' onClick={toggleMenu}>
          {MenuData.map((menu, index) => {
            return (
              <li className='menu-text' key={index}>
                <Link to={menu.path}>
                  {menu.icon}
                  <span className='text-thai'>{menu.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default Navigation