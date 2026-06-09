import "../../css/sidebar.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="sidebar">
      <h4>StockMate</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link text-white">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/report" className="nav-link text-white">Report</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/analytics" className="nav-link text-white">Analytics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ai-query" className="nav-link text-white"><i className="bi bi-stars"></i>Inventino</NavLink>
        </li>
      </ul>

      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default Sidebar;
