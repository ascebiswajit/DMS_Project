
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="Logo" />
          <span className="d-none d-lg-block">DMS</span>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar}></i>
      </div>

      <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <Link className="nav-link nav-icon search-bar-toggle" to="/">
              <i className="bi bi-search"></i>
            </Link>
          </li>

          <li className="nav-item dropdown pe-3">
            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="/" data-bs-toggle="dropdown">
              <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/profile">
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/settings">
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/help">
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </Link>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item d-flex align-items-center" to="/logout">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

