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
        <div className='menu-selected'>Schedule</div>
        <div id="header-nav">
          <form className="search-form">
            <button type="button" className="btn btn-primary btn-sm" id="search-btn">
              <span class="material-symbols-outlined">
                search
              </span>
            </button>
            <input type='text' placeholder='Search'/>
          </form>
          <button id='notification-btn'>
            <span class="material-symbols-outlined">
            notifications
            </span>
          </button>
          <div className='my-account-wrapper'>
            <div className="my-profile-img"></div>
            <div>Account</div>
          </div>
        </div>
      </nav>
    );
}

export default Header;

if (document.getElementById('header')) {
  ReactDOM.render(<Header />, document.getElementById('header'));
}