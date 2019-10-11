import styled from 'styled-components';
import { orange, white } from 'styled/colors';

const FaqButton = styled.div`
  position: relative;
  background-color: ${white};
  height: 30px;
  width: 30px;
  transition: height 0.2s, width 0.2s;

  @media screen and (max-width: 850px) {
    height: 25px;
    width: 25px;
  }
  @media screen and (max-width: 500px) {
    height: 20px;
    width: 20px;
  }

  &:before {
    content: '';
    position: absolute;
    top: ${({ toggleBox }) => (toggleBox ? '50%' : '0')};
    left: 50%;
    background-color: ${orange};
    border-radius: 3px;
    width: 25%;
    height: ${({ toggleBox }) => (toggleBox ? '0' : '100%')};
    transform: translateX(-50%);
    transition: height 0.3s, top 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${orange};
    border-radius: 3px;
    width: 100%;
    height: 25%;
    transform: translateY(-50%);
    transition: height 0.3s, top 0.3s;
  }
`;

export default FaqButton;
