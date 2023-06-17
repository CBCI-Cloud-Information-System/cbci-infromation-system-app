import React from 'react';
import ReactDOM from 'react-dom';

import "./members.css";
import MemberThumb from '../components/MemberThumb/MemberThumb';
import ExpandThumb from '../components/ExpandThumb/ExpandThumb';

import { useMemberFetch } from '../hooks/useMemberFetch';
import { useState } from 'react';

const expandInit = {
  isShow: false,
  data: []
}

function Members() {

    const { state, loading } = useMemberFetch();
    const [expand, setExpand] = useState(expandInit);

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
            !loading ? state.map((member, index) => (
              <MemberThumb 
                key={index}
                first_name={member.first_name}
                last_name={member.last_name}
                contact={member.contact} 
                data={member}
                setExpand={setExpand}
              />
            )) : 
            <div className='skeleton-loading-thumb'> 
              <div className="card" aria-hidden="true">
                  <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                      </p>
                      {/* <a className="btn btn-primary disabled placeholder col-6"></a> */}
                  </div>
              </div>
          </div>
          }
        </div>
        {
          expand.isShow &&
        <div id='expand-wrapper' className='expand-member-thumb-wrapper '>
          <ExpandThumb
            first_name={expand.data.first_name}
            last_name={expand.data.last_name}
            contact={expand.data.phone}
            email={expand.data.email}
            setExpand={setExpand}
          />
        </div>
        }
      </div>
    );
}

export default Members;

if (document.getElementById('members')) {
  ReactDOM.render(<Members />, document.getElementById('members'));
}