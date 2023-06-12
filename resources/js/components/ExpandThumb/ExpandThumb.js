import React from 'react';
import ReactDOM from 'react-dom';

import "./expand-thumb.css";


function ExpandThumb() {
    return (
      <div className='expand-thumb'>
        <div className='expand-thumb-header'>
          <h1 className='expand-thumb-title'>Member Details</h1>
          <div className='expand-download-details-btn'>Download Details</div>
        </div>
        <div className='expand-thumb-details'>
          <div className='expand-thumb-profile'></div>
          <div className='expand-personal-details'>
            <p className='expand-thumb-name'>Member Name</p>
          </div>
        </div>
        
      </div>
    );
}

export default ExpandThumb;
