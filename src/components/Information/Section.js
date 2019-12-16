import styled from 'styled-components';
import { colorWithOpacity, grey, text_information } from 'styled/colors';

const Section = styled.section`
  font-family: 'Roboto', sans-serif;
  padding: 60px 150px;
  color: ${colorWithOpacity(grey, 0.7)};
  text-align: justify;
  line-height: 1.4;

  & b::not(a) {
    color: ${text_information};
  }
  @media screen and (max-width: 1350px) {
    padding: 60px 125px;
  }
  @media screen and (max-width: 1050px) {
    padding: 60px 100px;
  }
  @media screen and (max-width: 900px) {
    padding: 60px 75px;
  }
  @media screen and (max-width: 750px) {
    padding: 50px;
  }
  @media screen and (max-width: 550px) {
    padding: 30px 25px;
  }
`;

export default Section;
