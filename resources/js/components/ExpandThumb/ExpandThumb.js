import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from "gridjs";

import "gridjs/dist/theme/mermaid.css";
import "./expand-thumb.css";


function ExpandThumb(props) {

  const wrapperRef = useRef(null);

  const close = () => {
    const data = {
      isShow: false,
      data: []
    }
    props.setExpand(data);
  }
  
  useEffect(() => {
    const grid = new Grid({
      columns: ['Date', 'Time', 'Event'],
      pagination: true,
      pagination: {
        limit: 5
      },
      // resizable: true,
      fixedHeader: true,
      // height: tableHeight(),
      data: [
        ['Jan 23, 2023', '12:00 pm', `${tableHeight()}px`],
        ['June 13, 2023', '11:00 am',   'Morning Service'],
        ['Jan 23, 2023', '12:00 pm', 'Mentoring'],
        ['Jan 23, 2023', '12:00 pm', 'Mentoring'],
        ['Jan 23, 2023', '12:00 pm', 'Mentoring'],
        ['Jan 23, 2023', '12:00 pm', 'Mentoring'],
      ],
      style: {
        table: {
          'background-color': 'rgba(36, 36, 36)',
          // border: '1px solid #3B3B3B',
          overflow: 'hide'
        },
        th: {
          'background-color': '#1D1F20',
          color: '#000',
          'border': 'none',
          'text-align': 'center'
        },
        td: {
          'background-color': '#212325',
          'border': 'none',
          'text-align': 'center'
        }
        
        
      }
    });

    grid.render(wrapperRef.current);
    // tableHeight();
  });

    return (
      <div className='expand-thumb'>
        <div className='expand-thumb-header'>
          <div className='expand-thumb-flex'>
            <span onClick={close} className='expand-exit-icon material-symbols-outlined'>
              exit_to_app
            </span>
            <h1 className='expand-thumb-title'>Member Details</h1>
          </div>
          <div className='expand-download-details-btn'>Download Details</div>
        </div>
        <div className='expand-thumb-details'>
          <div className='expand-thumb-profile'></div>
          <div className='expand-personal-details'>
            <p className='expand-thumb-name'>{props.first_name + ' ' + props.last_name}</p>
            <div className='expand-thumb-stats-wrapper'>
              <ExpandStats label='Age' info='22'/>
              <ExpandStats label='Contact No.' info={props.contact}/>
              <ExpandStats label='E-mail' info={props.email}/>
            </div>
          </div>
          
        </div>
        <div className='expand-thumb-attendance-wrapper'>
        <h1 className='expand-thumb-title'>Attendance</h1>
          <div className="attendance-table" ref={wrapperRef} />
        </div>
        
        

      </div>
    );
}

function tableHeight(){
  
  const elem = document.querySelector(".expand-thumb-attendance-wrapper");
  if(elem) {
    const rect = elem.getBoundingClientRect();
    console.log(`height: ${rect.height}`);
    console.log(elem.clientHeight); 
    console.log(document.querySelector(".attendance-table").clientHeight);

    return elem.clientHeight - 110;

    // return elem.clientHeight - 100;
  }

  
}

function ExpandStats(props){
  return(
    <div className='expant-thumb-stats'>
      <p className='expant-thumb-stats-label'>{props.label}</p>
      <p className='expant-thumb-stats-info'>{props.info}</p>
    </div>
  );
}

export default ExpandThumb;
