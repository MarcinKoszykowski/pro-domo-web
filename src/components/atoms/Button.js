import styled from 'styled-components';
import colors from '../../styled/colors';

const Button = styled.button`
  letter-spacing: 1px;
  color: ${({ color }) => color};
  border: 2px solid ${({ color }) => color};
  background-color: ${colors.white};
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s, border 0.2s;

  &:hover {
    transform: translateY(-3px);
    color: ${({ hoverColor }) => hoverColor};
    border-color: ${({ hoverColor }) => hoverColor};
  }
  &:active {
    transform: translateY(-1px);
  }
`;

export default Button;
