import React from 'react';
import styled from 'styled-components';
import LogoImg from 'assets/images/logo.png';
import alt from 'data/alt';
import routes from 'data/routes';

const { main } = routes;
const { logo } = alt;

const Logo = styled.img`
  width: 70px;
  &:active {
    transform: scale(0.9);
  }
`;

const NavigationLogo = () => (
  <a href={main}>
    <Logo src={LogoImg} alt={logo} />
  </a>
);

export default NavigationLogo;
