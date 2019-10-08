import React from 'react';
import styled from 'styled-components';
import AboutUsTitle from 'components/atoms/AboutUs/AboutUsTitle';
import AboutUsText from 'components/atoms/AboutUs/AboutUsText';
import aboutUs from 'data/aboutUs';

const Wrapper = styled.div`
  position: relative;
  margin-right: 6%;
  transition: 0.2s margin;

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;

const AboutUsTextBox = () => (
  <Wrapper>
    <AboutUsTitle>{aboutUs.title}</AboutUsTitle>
    <AboutUsText>{aboutUs.text}</AboutUsText>
  </Wrapper>
);

export default AboutUsTextBox;
