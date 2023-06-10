import React from 'react';
import ReactDOM from 'react-dom';

import "./header.css";

import logo from '../../img/cbci_logo.png';

function Header() {
    return (
      <nav id="main-nav">
        <div id="logo-wrapper">
          <img id="nav-logo" src={logo} />
        </div>
        <div>Schedule</div>
        <div id="header-nav">
          <div>

          </div>
          <div className='my-account-wrapper'>
            <div className="my-profile-img"></div>
            <div>Account</div>
          </div>
        </div>
      </nav>
    );
}

export default Header;
