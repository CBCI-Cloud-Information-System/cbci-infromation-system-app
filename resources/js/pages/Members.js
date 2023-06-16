import React from 'react';
import ReactDOM from 'react-dom';

import "./members.css";
import MemberThumb from '../components/MemberThumb/MemberThumb';
import ExpandThumb from '../components/ExpandThumb/ExpandThumb';

import { useMemberFetch } from '../hooks/useMemberFetch';

function Members() {

    const { state } = useMemberFetch();

    // console.log(state);

    return (
      <div className='member-wrapper'>
        <div className='member-grid'>
          {/* <MemberThumb></MemberThumb> */}
          {/* <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb>
          <MemberThumb></MemberThumb> */}
          {
            state.map(member => (
              <MemberThumb 
                first_name={member.first_name}
                last_name={member.last_name}
                contact={member.contact} 
              />
            ))
          }
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