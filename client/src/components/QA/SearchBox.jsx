import React from 'react';

const SearchBox = () => {
  return (
    <fieldset className='Searchbox-Container'>
      <div className='Search-Input'>
        <input
          className='search-input'
          value=''
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
      <div className='Eyeglass-button'>
        <i class="fa fa-search"></i>
      </div>
      </div>
    </fieldset>
  )
}

export default SearchBox;