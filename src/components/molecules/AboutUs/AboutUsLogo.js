import React from 'react';
import styled from 'styled-components';
import animations from 'styled/animations';
import alt from 'data/alt';
import LogoImg from 'assets/images/logo.png';

const Logo = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 200%;
  text-align: center;
  animation: ${animations.aboutUsLogoAnimation} 1s ease-out 0.5s backwards;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const AboutUsLogo = () => (
  <Wrapper>
    <Logo alt={alt.logo} src={LogoImg} />
  </Wrapper>
);

export default AboutUsLogo;
