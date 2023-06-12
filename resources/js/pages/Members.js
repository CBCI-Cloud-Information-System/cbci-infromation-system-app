import React from 'react';
import ReactDOM from 'react-dom';

import "./members.css";
import MemberThumb from '../components/MemberThumb/MemberThumb';
import ExpandThumb from '../components/ExpandThumb/ExpandThumb';


function Members() {
    return (
      <div className='member-wrapper'>
        <div className='member-grid'>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
        </div>
        <div id='expand-wrapper' className='expand-member-thumb-wrapper '>
          <ExpandThumb></ExpandThumb>
        </div>
      </div>
    );
}

export default Members;

if (document.getElementById('members')) {
  ReactDOM.render(<Members />, document.getElementById('members'));
}