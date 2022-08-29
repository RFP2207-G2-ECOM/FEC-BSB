import React, { useContext } from 'react';

import AContainer from './AContainer.jsx';
import AddAQuestion from './AddAQuestion.jsx';
import AInfo from './AInfo.jsx';
import AnswerReponses from './AnswerResponses.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import QContainer from './QContainer.jsx';
import SearchBox from './SearchBox.jsx';
import Title from './Title.jsx';

import styles from '../../styles/QA/qa.css';
import { QuestionsContext } from '../../contexts/question.context.jsx';

const QuestionAnswers = () => {

  const { productID, results } = useContext(QuestionsContext);

  return (
    <div className='QA-Container'>
      <Title />
      <SearchBox />
      {
        results ?
          results.map((data, index) => {
            return (<>
              <QContainer
                key={`question-${data.question_id}`}
                question_body={data.question_body}
                question_helpfulness={data.question_helpfulness}
              />
              {
                Object.values(data.answers).map(val => {
                  return (
                    <>
                      <AContainer
                        body={val.body}
                        key={`ans-${val.id}`}
                      />
                      <AInfo
                        answerer_name={val.answerer_name}
                        date={val.date}
                        helpful={val.helpfulness}
                        key={`aInfo-${val.id}`}
                      />
                      {/* <AnswerReponses
                        key={`${index}-ans-resp`}
                      /> */}
                    </>
                  )
                })
              }
            </>)
          })
          :
          <></>
      }
      <LoadMoreAnswers />
      <MoreAnsweredQuestions />
    </div>
  )
}

export default QuestionAnswers;