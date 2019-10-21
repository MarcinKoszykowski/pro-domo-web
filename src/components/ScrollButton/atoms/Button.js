import styled from 'styled-components';
import { orange } from 'styled/colors';
import animations from 'styled/animations';

const { scrollButton } = animations;

const Button = styled.img`
  position: fixed;
  right: 20px;
  bottom: 12.5px;
  width: 35px;
  height: 35px;
  background-color: ${orange};
  opacity: 0.6;
  border-radius: 5px;
  cursor: pointer;
  animation: 0.3s ${scrollButton} ease-in;
  transition: bottom 0.2s, right 0.2s, width 0.2s, height 0.2s, opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 950px) {
    right: 10px;
    bottom: 15px;
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 750px) {
    right: 20px;
    bottom: 27.5px;
  }
`;

export default Button;
