import React from 'react';
import styled from 'styled-components';
import LogoImg from 'assets/images/logo.png';
import alt from 'data/alt';

const Logo = styled.img`
  width: 70px;
  &:active {
    transform: scale(0.9);
  }
`;

const NavigationLogo = () => (
  <a href="/">
    <Logo src={LogoImg} alt={alt.logo} />
  </a>
);

export default NavigationLogo;
