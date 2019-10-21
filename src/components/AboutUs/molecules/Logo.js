import React from 'react';
import styled from 'styled-components';
import animations from 'styled/animations';
import alt from 'data/alt';
import logoImage from 'assets/images/logo.png';
import Image from 'components/AboutUs/atoms/Image';

const { aboutUsLogoAnimation } = animations;
const { logo } = alt;

const Wrapper = styled.div`
  width: 200%;
  text-align: center;
  animation: ${aboutUsLogoAnimation} 1s ease-out 0.5s backwards;

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
