import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';

import "./home.css";
import MenuButton from '../components/Button/MenuButton';
import SubMenuButton from '../components/Button/SubMenuButton';
import MemberThumb from '../components/MemberThumb/MemberThumb';

function Home() {
    return (
        <>
          <div className='flex-cont'>
            <div className='side-menu-cont'>
              <div className='main-menu-cont'>
                <MenuButton>
                    group
                </MenuButton>
              </div>
              <div className='sub-menu-cont'>
                <div className='sub-menu-title'>
                  <p>Schedule</p>
                </div>
                <div className='sub-menu'>
                  <SubMenuButton>Members</SubMenuButton>
                </div>
                
              </div>
            </div>
            <div className='main-cont'>
              <MemberThumb></MemberThumb>
            </div>
          </div>
        </>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
