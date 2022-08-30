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
          <FaFacebookSquare /> {/* Add onClickHandler to go to FaceBook link */}
          <FaInstagramSquare /> {/* Add onClickHandler to go to Instagram link */}
        </div>
        <div className='SMBRow'>
          <FaTwitterSquare /> {/* Add onClickHandler to go to Twitter link */}
          <FaPinterestSquare /> {/* Add onClickHandler to go to Pinterest link */}
        </div>
      </div>
    </IconContext.Provider>
  )
};

export default SocialMediaButtons;