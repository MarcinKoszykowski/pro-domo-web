import styled from 'styled-components';
import animations from 'styled/animations';

const Title = styled.h1`
  display: inline-box;
  font-size: 4rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: ${animations.aboutUsTextAnimation} 1s ease-out 0.5s backwards;
  transition-property: font-size, margin;

  @media screen and (min-width: 1800px) {
    font-size: 4.4rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 3.8rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 2.8rem;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 950px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export default Title;
