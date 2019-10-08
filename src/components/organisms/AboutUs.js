import React from 'react';
import styled from 'styled-components';
import AboutUsLogo from 'components/molecules/AboutUs/AboutUsLogo';
import AboutUsTextBox from 'components/molecules/AboutUs/AboutUsTextBox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AboutUs = () => (
  <Wrapper>
    <AboutUsTextBox />
    <AboutUsLogo />
  </Wrapper>
);

export default AboutUs;
