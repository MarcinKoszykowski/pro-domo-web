import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animations from 'styled/animations';
import colors from 'styled/colors';

const Wrapper = styled.div`
  cursor: auto;
  font-size: 0.95rem;
  height: 100%;
  line-height: 1.5;
  padding: 15px 30px 10px 40px;
  text-align: justify;
  overflow: hidden;
  border-bottom: 1px solid ${colors.orange};
  animation: ${({ toggleBox }) =>
      toggleBox ? animations.answerAnimationOn : animations.answerAnimationOff}
    0.5s ease;
  transition: font-size 0.2s, padding 0.2s;

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 800px) {
    padding: 10px 25px 10px 35px;
    font-size: 0.85rem;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 20px 10px 30px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 15px 10px 25px;
    font-size: 0.75rem;
  }
  @media screen and (max-width: 400px) {
    padding: 10px 15px 10px 20px;
    font-size: 0.7rem;
  }
`;

const FaqAnswer = ({ children, toggleBox }) => <Wrapper toggleBox={toggleBox}>{children}</Wrapper>;

FaqAnswer.propTypes = {
  children: PropTypes.element.isRequired,
  toggleBox: PropTypes.bool.isRequired,
};

export default FaqAnswer;
