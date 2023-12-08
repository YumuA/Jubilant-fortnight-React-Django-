import React from "react";
import Logo from '../components/Logo.jsx'
import { Link } from 'react-router-dom';
import '../styles/sass/components/TopBar.sass'; 

function TopBar() {
  return (
    <header className="top-bar">
      <div className="logo-container">
        <Logo />
      </div>
      <nav className="right-nav">
        <ul className="nav-list">
          <li><Link to="/townhall">Townhall</Link></li>
          <li><Link to="/language">Language</Link></li>
          <li><Link to="/countryl">Country Language</Link></li>
          <li><Link to="/country">Country</Link></li>
          <li><Link to="/city">City</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default TopBar;
