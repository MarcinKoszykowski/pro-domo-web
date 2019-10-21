import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Navigation/molecules/Logo';
import Navigation from 'components/Navigation/organisms/Navigation';
import NavigationButton from 'components/Navigation/organisms/NavigationButton';

const Nav = styled.nav`
  display: flex;
  padding: 15px 10px 15px 15px;
  justify-content: space-between;
  align-items: center;
  transition: margin 0.2s, width 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1575px;
  }
`;

const Wrapper = styled.ul`
  margin: 0 10px;
`;

const NavigationTemplate = () => (
  <Nav>
    <Logo />
    <Wrapper>
      <Navigation />
      <NavigationButton />
    </Wrapper>
  </Nav>
);

export default NavigationTemplate;
