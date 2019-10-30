import styled from 'styled-components';
import { black, orange } from 'styled/colors';

const Text = styled.p`
  display: inline-block;
  margin: 0 5px;
  padding: 1px 4px;
  color: ${black};
  border-top: 1px solid ${orange};
  border-bottom: 1px solid ${orange};
  z-index: 1;
  position: relative;

  &:hover {
    color: ${orange};
    border-top: none;
    border-bottom: none;

    &::before {
      transform: translateX(5px);
      border-left: 1px solid ${black};
    }
    &::after {
      transform: translateX(-5px);
      border-right: 1px solid ${black};
    }
  }
  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    height: 100%;
    top: 0;
    transition: transform 0.2s ease-in-out;
  }
  &::before {
    left: -5px;
  }
  &::after {
    right: -5px;
  }
  &:active::after {
    border-left: 1px solid ${orange};
  }
  &:active::before {
    border-right: 1px solid ${orange};
  }
`;

export default Text;
