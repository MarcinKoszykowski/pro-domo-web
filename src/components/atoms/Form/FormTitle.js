import styled from 'styled-components';
import { greyDark } from 'styled/colors';

const FormTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: ${greyDark};
  margin: 100px auto 20px;
  padding: 0 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  transition: font-size 0.2s, margin 0.2s, letter-spacing 0.2s;

  @media screen and (max-width: 950px) {
    font-size: 2rem;
    margin: 80px auto 10px;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.8rem;
    margin: 60px auto 10px;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.55rem;
  }
  @media screen and (max-width: 470px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`;

export default FormTitle;
