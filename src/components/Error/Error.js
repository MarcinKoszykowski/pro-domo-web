import React from 'react';
import styled from 'styled-components';
import { number, info } from 'data/error';
import Text from './atoms/Text';
import HyperLinkButton from './molecules/HyperLinkButton';

const Wrapper = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 100px 0 150px;
  transition-property: margin;
  max-width: 1600px;

  @media screen and (min-width: 1800px) {
    padding: 200px 0 225px;
  }
`;

const Error = () => (
  <Wrapper>
    <Text error>{number}</Text>
    <Text>{info}</Text>
    <HyperLinkButton />
  </Wrapper>
);

export default Error;
