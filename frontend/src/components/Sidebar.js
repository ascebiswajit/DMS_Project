import React from 'react';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="index.html">
            <i className="bi bi-person"></i>
            <span>Docs - Form</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables-data.html">
            <i className="bi bi-grid"></i>
            <span>Users</span>
          </a>
        </li>
        <li className="nav-heading">Pages</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-error-404.html">
            <i className="bi bi-dash-circle"></i>
            <span>Error 404</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
