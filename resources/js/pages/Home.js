import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';

import "./home.css";
import MenuButton from '../components/Button/MenuButton';
import SubMenuButton from '../components/Button/SubMenuButton';
import MemberThumb from '../components/MemberThumb/MemberThumb';
import Members from './Members';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Attendance from './Attendance';

function Home() {
    const linkStyle = {
      color: 'inherit', 
      textDecoration: 'inherit'
    }
    return (
        <>
        <BrowserRouter>
          <div id='home-wrapper' className='flex-cont'>
            <div className='side-menu-cont'>
              <div className='main-menu-cont'>
                <Link style={linkStyle} to='/home/members/'>
                  <MenuButton style='menu-btn-selected'>group</MenuButton>
                </Link>
                <Link style={linkStyle} to='/home/schedule/'>
                  <MenuButton>today</MenuButton>
                </Link>
              </div>
              <div className='sub-menu-cont'>
                <div className='sub-menu-title'>
                  <p>Schedule</p>
                </div>
                <div className='sub-menu'>
                  <Routes>
                    <Route path='/home/members/*' element={<SubMenuButton>Members</SubMenuButton>}/>
                    <Route path='/home/schedule/*' element={
                      <>
                        <SubMenuButton>Attendance</SubMenuButton>
                        <SubMenuButton>Calendar</SubMenuButton>
                      </>
                    }/>
                  </Routes>
                  
                </div>
                
              </div>
            </div>
            <div className='main-cont'>
              {/* <MemberThumb></MemberThumb> */}
              
                <Routes>
                  <Route path='/home/members/*' element={<Members/>}/>
                  <Route path='/home/schedule/*' element={<Attendance/>}/>
                </Routes>
              
              {/* <Members></Members> */}
            </div>
          </div>
          </BrowserRouter>
        </>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
