import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from 'styled/colors';
import FaqAnswer from 'components/molecules/Faq/FaqAnswer';
import FaqQuestion from 'components/molecules/Faq/FaqQuestion';

const Wrapper = styled.div`
  color: ${colors.black};
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

function Faq({ question, answer }) {
  const [answerIsVisibility, setAnswerIsVisibility] = useState(false);
  const [toggleBox, setTogglBox] = useState(false);

  const handleBoxOnClick = () => {
    if (answerIsVisibility) {
      setTogglBox(false);
      setTimeout(() => setAnswerIsVisibility(false), 350);
    } else {
      setAnswerIsVisibility(true);
      setTogglBox(true);
    }
  };

  return (
    <Wrapper>
      <FaqQuestion toggleBox={toggleBox} boxOnClick={handleBoxOnClick}>
        {question}
      </FaqQuestion>
      {answerIsVisibility && <FaqAnswer toggleBox={toggleBox}>{answer}</FaqAnswer>}
    </Wrapper>
  );
}

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.element.isRequired,
};

export default Faq;
