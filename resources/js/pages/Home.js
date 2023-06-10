import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';

import "./home.css";

function Home() {
    return (
        <>
          <Header></Header>
          <div className='flex-cont'>
            <div className='side-menu-cont'>
              <div className='main-menu-cont'>

              </div>
              <div className='sub-menu-cont'>

              </div>
            </div>
            <div className='main-cont'>

            </div>
          </div>
        </>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
