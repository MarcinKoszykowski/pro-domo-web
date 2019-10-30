import React from 'react';
import styled from 'styled-components';
import error from 'data/error';
import Text from './atoms/Text';
import HyperLinkButton from './molecules/HyperLinkButton';

const Wrapper = styled.section`
  text-align: center;
  margin: 0 auto;
  padding: 100px 0 150px;
  transition: margin 0.2s;
  max-width: 1600px;

  @media screen and (min-width: 1800px) {
    padding: 200px 0 225px;
  }
`;

const Error = () => (
  <Wrapper>
    <Text error>{error.number}</Text>
    <Text>{error.info}</Text>
    <HyperLinkButton />
  </Wrapper>
);

export default Error;
