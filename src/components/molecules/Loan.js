import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import alt from 'data/alt';
import LoanImg from 'assets/images/pozyczka.png';
import LoanImage from 'components/atoms/LoanImage';

const Wrapper = styled.div`
  padding: 30px;
  display: block;
  transition: width 0.2s, margin 0.2s, padding 0.2s;

  @media screen and (min-width: 1600px) {
    width: 1540px;
    margin: 0 auto;
  }
  @media screen and (max-width: 950px) {
    padding: 20px;
  }
  @media screen and (max-width: 650px) {
    padding: 10px;
  }
`;

const Loan = ({ isVisibility }) => (
  <Wrapper>
    <LoanImage isVisibility={isVisibility} src={LoanImg} alt={alt.loan} />
  </Wrapper>
);

Loan.propTypes = {
  isVisibility: PropTypes.bool.isRequired,
};

export default Loan;
