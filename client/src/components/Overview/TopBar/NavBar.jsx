import React from 'react';

import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='innerNavBar'>
        <div className='TopBarLeft'>
          <img src={`https://www.officialcharts.com/media/318937/backstreet_boys.jpg?width=796&height=420&mode=stretch`} className='BSBPhoto'></img>
        </div>
        <div className='Logo'>
          BackStreet's Back!
        </div>
        <div className='SiteNavBar'>
          <div className='IconContainer' onClick={()=>{alert('Navigate to Search Page')}} >
            <FaSearch className='Icon'/>
          </div>
          <div className='IconContainer' onClick={()=>{alert('Navigate to User Info Page')}} >
            <FaUserAlt className='Icon' />
          </div>
          <div className='IconContainer' onClick={()=>{alert('Open Cart Modal?')}} >
            <FaShoppingCart className='Icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;