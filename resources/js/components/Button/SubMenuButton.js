import React from 'react';
import ReactDOM from 'react-dom';

import "./sub-menu-button.css";

function SubMenuButton(props) {
    return (
      <div className='sub-menu-btn'>
        <span class="sub-menu-btn-icon material-symbols-outlined">
          {props.icon}
        </span>
        <div>
          {props.children}
        </div>
      </div>
    );
}

export default SubMenuButton;