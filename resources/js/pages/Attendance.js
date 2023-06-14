import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { Grid } from "gridjs";
import { css } from '@emotion/css';

import "gridjs/dist/theme/mermaid.css";

import "./attendance.css";


function Attendance() {

  

    return (
      <div className='attendance-page'>
        <AttendanceTable />
      </div>
    );
}

function AttendanceTable(){

  const wrapperRef = useRef(null);

  
  
  useEffect(() => {
    const grid = new Grid({
      columns: [
        { 
          name: 'June 15, 2023',
          // attributes: (cell) => {
          //   // add these attributes to the td elements only
          //   if (cell) { 
          //     return {
          //       'data-cell-content': cell,
          //       'onclick': () => alert(cell),
          //       'style': 'cursor: pointer',
          //     };
          //   }
          // },
          columns: [{
            name: 'Name'
          }, {
            name: 'Network'
          }]
        }
     ],
      pagination: true,
      pagination: {
        limit: 5
      },
      // resizable: true,
      fixedHeader: true,
      // height: tableHeight(),
      data: [
        ['Paul Justine Faustino', 'Aaron Clemente'],
      ],
      style: {
        table: {
          'background-color': 'rgba(36, 36, 36)',
          // border: '1px solid #3B3B3B',
          overflow: 'hide'
        },
        th: {
          'background-color': '#191919',
          color: '#000',
          border: '1px solid #28282F',
          
          // 'text-align': 'center'
        },
        td: {
          'background-color': '#212325',
          'border': 'none',
          // 'text-align': 'center'
        }
      },
      // className: {
      //   table: css`
      //     th:first-child {
      //       background-color: rgba(0, 0, 0, 0.1);
      //     }
      //   `,
      // }
    });

    grid.render(wrapperRef.current);
    // tableHeight();
  });

  return(
    <div className='attendance-table-wrapper'>
      <p>Table Title</p>
      <div ref={wrapperRef} />
    </div>
  );
}

export default Attendance;

if (document.getElementById('attendance')) {
  ReactDOM.render(<Attendance />, document.getElementById('attendance'));
}
