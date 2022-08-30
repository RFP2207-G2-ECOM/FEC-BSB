import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { IconContext} from 'react-icons';

const SocialMediaButtons = () => {
  return (
    <IconContext.Provider value={{className:'btn'}} >
      <div className='Social-Media-Buttons' >
        <div className='SMBRow'>
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=example.org">
          <FaFacebookSquare />
          </a>
          <FaInstagramSquare />
        </div>
        <div className='SMBRow'>
          <a target="_blank" href="https://twitter.com/intent/tweet">
            <FaTwitterSquare />
          </a>
          <FaPinterestSquare /> {/* Add onClickHandler to go to Pinterest link */}
        </div>
      </div>
    </IconContext.Provider>
  )
};

export default SocialMediaButtons;