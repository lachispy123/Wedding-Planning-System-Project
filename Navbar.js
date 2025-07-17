import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaDollarSign, FaCalendarAlt, FaBell } from 'react-icons/fa';

const navItems = [
  { path: '/', label: 'Dashboard', icon: FaHome },
  { path: '/guests', label: 'Guest List', icon: FaUsers },
  { path: '/budget', label: 'Budget', icon: FaDollarSign },
  { path: '/planning', label: 'Planning', icon: FaCalendarAlt },
  { path: '/reminders', label: 'Reminders', icon: FaBell }
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          💒 Wedding Planner
        </Link>
        <ul className="navbar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
                >
                  <Icon style={{ marginRight: '8px' }} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 