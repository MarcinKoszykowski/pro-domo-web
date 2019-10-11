import React from 'react';
import styled from 'styled-components';
import ErrorText from 'components/atoms/ErrorText';
import ErrorButton from 'components/molecules/ErrorButton';
import error from 'data/error';

const { number, info } = error;
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
    <ErrorText error>{number}</ErrorText>
    <ErrorText>{info}</ErrorText>
    <ErrorButton />
  </Wrapper>
);

export default Error;
