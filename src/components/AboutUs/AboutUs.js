import React from 'react';
import styled from 'styled-components';
import Logo from './molecules/Logo';
import Text from './molecules/Text';

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
