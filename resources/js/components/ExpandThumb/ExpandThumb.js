import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from "gridjs";

import "gridjs/dist/theme/mermaid.css";
import "./expand-thumb.css";


function ExpandThumb() {

  const wrapperRef = useRef(null);

  
  
  useEffect(() => {
    const grid = new Grid({
      columns: ['Date', 'Time', 'Event'],
      pagination: true,
      // pagination: {
      //   limit: 1
      // },
      // resizable: true,
      fixedHeader: true,
      height: tableHeight(),
      data: [
        ['Jan 23, 2023', '12:00 pm', `${tableHeight()}px`],
        ['June 13, 2023', '11:00 am',   'Morning Service'],
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
          <h1 className='expand-thumb-title'>Member Details</h1>
          <div className='expand-download-details-btn'>Download Details</div>
        </div>
        <div className='expand-thumb-details'>
          <div className='expand-thumb-profile'></div>
          <div className='expand-personal-details'>
            <p className='expand-thumb-name'>Member Name</p>
            <div className='expand-thumb-stats-wrapper'>
              <ExpandStats></ExpandStats>
              <ExpandStats></ExpandStats>
              <ExpandStats></ExpandStats>
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

    return elem.clientHeight - 100;

    // return elem.clientHeight - 100;
  }

  
}

function ExpandStats(){
  return(
    <div className='expant-thumb-stats'></div>
  );
}

export default ExpandThumb;
