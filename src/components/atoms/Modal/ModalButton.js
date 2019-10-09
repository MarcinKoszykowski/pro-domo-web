import styled from 'styled-components';
import colors from 'styled/colors';

const Button = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  border: 2px solid ${colors.orange};
  background-color: transparent;
  border-radius: 30px;
  height: 25px;
  width: 25px;
  cursor: pointer;
  transform: rotate(45deg);
  transition: border-color 0.2s, transform 0.2s, height 0.2s, width 0.2s, margin-right 0.2s;

  &:hover {
    transform: rotate(315deg);
    border-color: ${colors.grey};
    &::after,
    &::before {
      background-color: ${colors.grey};
    }
  }

  &::before {
    content: '';
    position: absolute;
    border-radius: 2px;
    top: 15%;
    left: 50%;
    width: 10%;
    height: 70%;
    transform: translateX(-50%);
    background-color: ${colors.orange};
    transition: background-color 0.2s;
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: 2px;
    top: 50%;
    left: 15%;
    height: 10%;
    width: 70%;
    transform: translateY(-50%);
    background-color: ${colors.orange};
    transition: background-color 0.2s;
  }
`;

export default Button;
