import styled from 'styled-components';
import animations from 'styled/animations';

const { aboutUsTextAnimation } = animations;
const AboutUsText = styled.p`
  text-align: justify;
  font-size: 1.3rem;
  line-height: 1.5;
  animation: ${aboutUsTextAnimation} 1.5s ease-out 0.5s backwards;
  transition: font-size 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 950px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.55rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.5rem;
  }
`;

export default AboutUsText;
