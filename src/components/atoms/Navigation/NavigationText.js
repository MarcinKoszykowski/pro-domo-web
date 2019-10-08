import styled from 'styled-components';
import colors from 'styled/colors';
import animations from 'styled/animations';

const NavigationText = styled.p`
  display: inline-block;
  margin: 0 5px;
  padding: 1px 4px;
  color: ${colors.black};
  border-top: 1px solid ${colors.orange};
  border-bottom: 1px solid ${colors.orange};
  position: relative;

  &:hover {
    color: ${colors.orange};
    border-top: none;
    border-bottom: none;

    &::after {
      animation: ${animations.navigationLinkHoverAfterAnimation} 0.2s ease-in;
      border-left: 0.1px solid ${colors.black};
    }
    &::before {
      animation: ${animations.navigationLinkHoverBeforeAnimation} 0.2s ease-in;
      border-right: 1px solid ${colors.black};
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
    border-left: 1px solid ${colors.orange};
  }
  &:active::before {
    border-right: 1px solid ${colors.orange};
  }
`;

export default NavigationText;
