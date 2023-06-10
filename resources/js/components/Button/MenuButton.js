import React from 'react';
import ReactDOM from 'react-dom';

import "./menu-button.css";

function MenuButton(props) {
    return (
      <div className='menu-btn'>
        <span class="menu-btn-icon material-symbols-outlined">
          {props.children}
        </span>
      </div>
    );
}

export default MenuButton;