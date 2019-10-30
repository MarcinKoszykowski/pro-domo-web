import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.3;
  object-fit: contain;
  display: flex;
  align-items: center;
  transition: font-size 0.2s;

  @media screen and (max-width: 1000px) {
    font-size: 1.05rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.95rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

const Question = ({ children, boxOnClick, plus }) => (
  <Wrapper>
    <Box onClick={boxOnClick} />
    <Button plus={plus} />
    <Text>{children}</Text>
  </Wrapper>
);

Question.propTypes = {
  children: PropTypes.string.isRequired,
  boxOnClick: PropTypes.func.isRequired,
  plus: PropTypes.bool.isRequired,
};

export default Question;
