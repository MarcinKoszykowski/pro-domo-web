import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { orange } from 'styled/colors';

const Wrapper = styled.div`
  cursor: auto;
  font-size: 0.95rem;
  line-height: 1.5;
  padding: 15px 30px 10px 40px;
  text-align: justify;
  overflow: hidden;
  border-bottom: 1px solid ${orange};
  transition-property: font, padding;

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

const Answer = ({ children }) => <Wrapper>{children}</Wrapper>;

Answer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Answer;
