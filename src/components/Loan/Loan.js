import React, { useContext } from 'react';
import styled from 'styled-components';
import alt from 'data/alt';
import loanImage from 'assets/images/pozyczka.png';
import Image from 'components/Loan/atoms/Image';
import AppContext from 'context';

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
  const { loan } = alt;

  return (
    <Wrapper>
      <Image elementVisibility={loanIsVisibility} src={loanImage} alt={loan} />
    </Wrapper>
  );
}

export default Loan;
