import React from 'react';
import styled from 'styled-components';
import Logo from 'components/AboutUs/molecules/Logo';
import Text from 'components/AboutUs/molecules/Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AboutUs = () => (
  <Wrapper>
    <Text />
    <Logo />
  </Wrapper>
);

export default AboutUs;
