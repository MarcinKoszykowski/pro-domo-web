import styled from 'styled-components';
import { black, orange } from 'styled/colors';
import animations from 'styled/animations';

const { navigationLinkHoverAfterAnimation, navigationLinkHoverBeforeAnimation } = animations;
const NavigationText = styled.p`
  display: inline-block;
  margin: 0 5px;
  padding: 1px 4px;
  color: ${black};
  border-top: 1px solid ${orange};
  border-bottom: 1px solid ${orange};
  position: relative;

  &:hover {
    color: ${orange};
    border-top: none;
    border-bottom: none;

    &::after {
      animation: ${navigationLinkHoverAfterAnimation} 0.2s ease-in;
      border-left: 0.1px solid ${black};
    }
    &::before {
      animation: ${navigationLinkHoverBeforeAnimation} 0.2s ease-in;
      border-right: 1px solid ${black};
    }
  }
  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &:active::after {
    border-left: 1px solid ${orange};
  }
  &:active::before {
    border-right: 1px solid ${orange};
  }
`;

export default NavigationText;
