import React from 'react';
import styled from 'styled-components';
import { copyright } from 'data/footer';
import Text from './atoms/Text';
import HyperLink from './molecules/HyperLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  transition-property: margin, padding, width, flex;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1600px;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>{copyright}</Text>
    <HyperLink />
  </Wrapper>
);

export default Footer;
