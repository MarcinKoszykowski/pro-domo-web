import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, grey, white } from 'styled/colors';
import animations from 'styled/animations';
import NavigationLogo from 'components/molecules/Navigation/NavigationLogo';
import Navigation from 'components/organisms/Navigation';

const { headerAnimation } = animations;
const Header = styled.header`
  font-weight: 500;
  position: fixed;
  z-index: 888;
  right: 0;
  top: 0;
  left: 0;
  min-width: 290px;
  background-color: ${colorWithOpacity(white, 0.8)};
  box-shadow: 0 5px 5px -5px ${grey};
  animation: ${headerAnimation} 1s ease 1s backwards;
`;

const Wrapper = styled.nav`
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

const HeaderTemplate = () => (
  <Header>
    <Wrapper>
      <NavigationLogo />
      <Navigation />
    </Wrapper>
  </Header>
);

export default HeaderTemplate;
