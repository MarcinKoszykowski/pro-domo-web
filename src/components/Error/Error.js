import React from 'react';
import styled from 'styled-components';
import Text from 'components/Error/atoms/Text';
import HyperLinkButton from 'components/Error/molecules/HyperLinkButton';
import error from 'data/error';

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

const { number, info } = error;

const Error = () => (
  <Wrapper>
    <Text error>{number}</Text>
    <Text>{info}</Text>
    <HyperLinkButton />
  </Wrapper>
);

export default Error;
