import styled from 'styled-components';
import { orange, white, blue } from 'styled/colors';

const Button = styled.button`
  margin: 50px auto 0;
  padding: 10px 16px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: ${orange};
  border: 2px solid ${orange};
  background-color: ${white};
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: padding 0.2s, margin 0.2s, font 0.2s, color 0.2s, transform 0.2s, border 0.2s;

  &:hover {
    transform: translateY(-3px);
    color: ${blue};
    border-color: ${blue};
  }
  &:active {
    transform: translateY(-1px);
  }

  @media screen and (min-width: 1800px) {
    margin-top: 60px;
    font-size: 1.3rem;
    padding: 12px 18px;
  }
  @media screen and (max-width: 840px) {
    margin-top: 40px;
    font-size: 1.1rem;
    padding: 8px 14px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    padding: 6px 12px;
    border-width: 1.5px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

export default Button;
