import React from 'react';
import styled from 'styled-components';
import animations from 'styled/animations';
import { logo } from 'data/alt';
import logoImage from 'assets/images/logo.png';
import Image from '../atoms/Image';

const Wrapper = styled.div`
  width: 200%;
  text-align: center;
  animation: ${animations.aboutUsLogoAnimation} 1s ease-out 0.5s backwards;

  @media screen and (min-width: 1800px) {
    width: 250%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Logo = () => (
  <Wrapper>
    <Image alt={logo} src={logoImage} />
  </Wrapper>
);

export default Logo;
