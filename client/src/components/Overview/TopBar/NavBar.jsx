import React from 'react';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='Logo'>
        Logo
      </div>
      <div className='SearchBar'>
        <input className='SearchInput' />
        <button className='SubmitButton'>Submit</button>
      </div>
    </div>
  )
}

export default NavBar;