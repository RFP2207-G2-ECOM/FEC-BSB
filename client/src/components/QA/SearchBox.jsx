import React, { useState, useContext, useEffect } from 'react';
import { QuestionsContext } from '../../contexts/question.context.jsx';

const SearchBox = ({ searchResults, setSearchResults }) => {
  const { productID, results } = useContext(QuestionsContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue.length <= 2) {
      setSearchResults(results);
    } else {
      var newResults = results.filter((question, index) => {
        if (question.question_body.toLowerCase().substring(0, searchValue.length) === searchValue.toLowerCase()) {
          return question;
        }
      })
      setSearchResults(newResults);
    }
  }, [searchValue])

  return (
      <fieldset className='Search-Input-Test'>
        <input
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </fieldset>
  )
}

export default SearchBox;