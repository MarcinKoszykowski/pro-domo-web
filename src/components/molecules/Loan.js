import React, { useContext } from 'react';
import styled from 'styled-components';
import alt from 'data/alt';
import LoanImg from 'assets/images/pozyczka.png';
import LoanImage from 'components/atoms/LoanImage';
import AppContext from 'context';

const { loan } = alt;
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

function Loan() {
  const { loanIsVisibility } = useContext(AppContext);
  return (
    <Wrapper>
      <LoanImage elementVisibility={loanIsVisibility} src={LoanImg} alt={loan} />
    </Wrapper>
  );
}

export default Loan;
