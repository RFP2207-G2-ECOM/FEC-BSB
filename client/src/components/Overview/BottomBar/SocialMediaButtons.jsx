import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';

const SocialMediaButtons = () => {
  return (
    <div className='Social-Media-Buttons'>
      <div className='SMBRow'>
        <button className="FB btn"> <FaFacebookSquare /> </button>
        <button className="IG btn"> <FaInstagramSquare /> </button>
      </div>
      <div className='SMBRow'>
        <button className="TW btn"> <FaTwitterSquare /> </button>
        <button className="PT btn"> <FaPinterestSquare /> </button>
      </div>
    </div>
  )
};

export default SocialMediaButtons;