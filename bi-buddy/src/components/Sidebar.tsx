import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaTools } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/crud-builder">
              <FaTools /> CRUD Builder
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
