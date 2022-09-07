import React from 'react';

const Announcements = () => {
  const Announcement = false;
  return (
    <div className='Announcements'>
      {Announcement ?
        <p>Placeholder for Actual Announcements. If none, don't show but keep space</p>
        :
        null
      }
    </div>
  )
}

export default Announcements;