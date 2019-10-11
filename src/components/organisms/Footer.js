import React from 'react';
import styled from 'styled-components';
import footer from 'data/footer';
import FooterText from 'components/molecules/FooterText';

const { copyright, created } = footer;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
  transition: margin 0.2s, padding 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1600px;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 10px 0;
  }
`;

const Footer = () => (
  <Wrapper>
    <FooterText>{copyright}</FooterText>
    <FooterText link>{created}</FooterText>
  </Wrapper>
);

export default Footer;
