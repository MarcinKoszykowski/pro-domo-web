import React from 'react';
import styled from 'styled-components';
import FirstColumn from 'components/Widgets/organisms/FirstColumn';
import SecondColumn from 'components/Widgets/organisms/SecondColumn';
import Address from 'components/Widgets/molecules/Address';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 30px;
  transition: margin 0.2s, width 0.2s, padding 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1540px;
  }
  @media screen and (max-width: 950px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 5px 10px;
  }
`;

const Widgets = () => (
  <Wrapper>
    <FirstColumn />
    <SecondColumn />
    <Address />
  </Wrapper>
);

export default Widgets;
