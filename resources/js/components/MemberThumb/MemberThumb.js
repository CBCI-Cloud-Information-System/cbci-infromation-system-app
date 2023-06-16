import React from 'react';
import ReactDOM from 'react-dom';

import "./member-thumb.css";

function MemberThumb(props) {
    return (
      <div className='member-thumb'>
       <div className='member-thumb-profile'>

       </div>
       <div className='member-thumb-info'>
        <p className='member-thumb-name'>{props.first_name + ' ' + props.last_name}</p>
        <p className='member-thumb-contact'>{props.contact}</p>
        <div className='member-thumb-status'>
          <span className='member-thumb-last-active'>
            Last seen: 05/23/2023
          </span>
        </div>
       </div>
      </div>
    );
}

export default MemberThumb;