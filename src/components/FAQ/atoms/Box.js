import styled from 'styled-components';
import { orange } from 'styled/colors';
import Text from 'components/FAQ/atoms/Text';

const Box = styled.button`
  content: '';
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  width: 90%;
  background-color: transparent;
  transition: width 0.2s;

  &:hover ~ ${Text} {
    color: ${orange};
  }

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
  @media screen and (min-width: 1400px) {
    width: 80%;
  }
  @media screen and (min-width: 1500px) {
    width: 75%;
  }
  @media screen and (min-width: 1600px) {
    width: 70%;
  }
`;

export default Box;
