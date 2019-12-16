import React from 'react';
import styled from 'styled-components';
import Address from './molecules/Address';
import FirstColumn from './organisms/FirstColumn';
import SecondColumn from './organisms/SecondColumn';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  transition-property: margin, width, padding;

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
    flex-direction: column;
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
