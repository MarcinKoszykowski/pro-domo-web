import React from 'react';
import styled from 'styled-components';
import { colorWithOpacity, grey, white } from 'styled/colors';
import animations from 'styled/animations';
import Navigation from './NavigationTemplate';

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

const HeaderTemplate = () => (
  <Header>
    <Navigation />
  </Header>
);

export default HeaderTemplate;
