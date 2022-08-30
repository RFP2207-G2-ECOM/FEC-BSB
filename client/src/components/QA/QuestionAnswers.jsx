import React, { useState, useContext, useEffect } from 'react';

import AContainer from './AContainer.jsx';
import AnswerContainer from './AnswerContainer.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import AInfo from './AInfo.jsx';
import AnswerReponses from './AnswerResponses.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import QContainer from './QContainer.jsx';
import ResponsePhotos from './ResponsePhotos.jsx';
import SearchBox from './SearchBox.jsx';
import Title from './Title.jsx';

import styles from '../../styles/QA/qa.css';
import { QuestionsContext } from '../../contexts/question.context.jsx';

const QuestionAnswers = () => {
  const { productID, results } = useContext(QuestionsContext);
  const [answerCount, setAnswerCount] = useState({});
  const [limit, setLimit] = useState({});

  useEffect(() => {
    if (results.length > 0) {
      const temp = {};
      const tempTwo = {};
      results.forEach(({ question_id, answers }) => {
        temp[question_id] = 1;
        tempTwo[question_id] = Object.keys(answers).length;
      })
      setAnswerCount(temp);
      setLimit(tempTwo);
    }
  }, [results])

  return (
    <div className='QA-Container'>
      <Title />
      <SearchBox />
      {
        results ?
          results.map((data, index) => {
            return (<div key={data.question_id}>
              <QContainer
                key={`question-${data.question_id}`}
                id={data.question_id}
                question_body={data.question_body}
                question_helpfulness={data.question_helpfulness}
              />
              {
                Object.values(data.answers).map((val, index) => {
                  if (index < answerCount[data.question_id]) {
                    return <AnswerContainer key={index} data={val} />
                  }
                })
              }
              {
                answerCount[data.question_id] < limit[data.question_id] ?
                  <LoadMoreAnswers
                    question_id={data.question_id}
                    answerCount={answerCount}
                    setAnswerCount={setAnswerCount}
                  />
                  : <></>
              }

            </div>)
          })
          :
          <></>
      }
      <MoreAnsweredQuestions product_id={productID} />
    </div>
  )
}

export default QuestionAnswers;