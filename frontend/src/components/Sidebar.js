import React  from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/docs-form">
            <i className="bi bi-person"></i>
            <span>Docs - Form</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="bi bi-grid"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/register">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/error-404">
            <i className="bi bi-dash-circle"></i>
            <span>Error 404</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
