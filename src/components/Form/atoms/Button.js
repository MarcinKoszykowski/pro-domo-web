import styled from 'styled-components';
import { blue, grey, white } from 'styled/colors';

const Button = styled.button`
  letter-spacing: 1px;
  color: ${blue};
  border: 2px solid ${blue};
  background-color: ${white};
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 50px auto;
  padding: 10px 16px;
  transition-property: padding, margin, font, color, transform, border;

  &:hover {
    transform: translateY(-3px);
    color: ${grey};
    border-color: ${grey};
  }
  &:active {
    transform: translateY(-1px);
  }

  @media screen and (min-width: 1800px) {
    margin: 60px auto;
    font-size: 1.3rem;
    padding: 12px 18px;
  }
  @media screen and (max-width: 950px) {
    margin: 40px auto;
    font-size: 1.1rem;
    padding: 8px 14px;
  }
  @media screen and (max-width: 400px) {
    margin: 30px auto;
    font-size: 1rem;
    padding: 8px 14px;
  }
`;

export default Button;
