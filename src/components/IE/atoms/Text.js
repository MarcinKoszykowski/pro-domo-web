import styled from 'styled-components';
import { white } from 'styled/colors';

const Text = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: ${white};
  transition: font 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export default Text;
