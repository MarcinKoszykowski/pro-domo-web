import React from 'react';
import styled from 'styled-components';
import { orangeDark } from 'styled/colors';
import ie from 'data/ie';
import Text from './atoms/Text';

const Wrapper = styled.section`
  position: fixed;
  top: 50%;
  padding: 20px 30px;
  left: 7.5%;
  right: 7.5%;
  z-index: 2;
  display: inline-flex;
  text-align: center;
  background-color: ${orangeDark};
  border-radius: 10px;
  transform: translateY(-50%);
  transition: 0.2s left, 0.2s right, 0.2s padding;

  @media screen and (min-width: 1600px) {
    left: 50%;
    rigth: null;
    transform: translate(-50%, -50%);
    width: 1200px;
  }
  @media screen and (max-width: 900px) {
    padding: 15px 20px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 15px;
  }
  @media screen and (max-width: 600px) {
    left: 5%;
    right: 5%;
  }
`;

const IE = () => {
  const isInternetExplorer = false || !!document.documentMode;

  return (
    isInternetExplorer && (
      <Wrapper>
        <Text>{ie}</Text>
      </Wrapper>
    )
  );
};

export default IE;
