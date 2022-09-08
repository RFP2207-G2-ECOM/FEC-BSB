import React from 'react';
import NavBar from './TopBar/NavBar.jsx';
import Announcements from './TopBar/Announcements.jsx';

const TopBar = () => {
  return (
    <div className='TopBar'>
      <NavBar />
      <Announcements />
    </div>
  )
}

export default TopBar;