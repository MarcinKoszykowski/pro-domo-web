import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { black } from 'styled/colors';
import Answer from './molecules/Answer';
import Question from './molecules/Question';

const Wrapper = styled.div`
  color: ${black};
  padding: 1px 15px;
  width: 100%;
  margin-top: 35px;
  text-align: left;
  border: none;
  transition: margin 0.2s, padding 0.2s;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 25px;
    padding: 1px 10px;
  }
`;

const FAQ = ({ question, answer }) => {
  const [answerIsVisibility, setAnswerIsVisibility] = useState(false);

  return (
    <Wrapper>
      <Question
        plus={answerIsVisibility}
        boxOnClick={() => setAnswerIsVisibility(!answerIsVisibility)}
      >
        {question}
      </Question>
      {answerIsVisibility && <Answer>{answer}</Answer>}
    </Wrapper>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.element.isRequired,
};

export default FAQ;
