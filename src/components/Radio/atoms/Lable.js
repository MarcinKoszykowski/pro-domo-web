import styled from 'styled-components';
import { grey_dark } from 'styled/colors';

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  margin: 0 50px;
  font-size: 1.1rem;
  color: ${grey_dark};
  transition-property: margin, font;

  @media screen and (max-width: 700px) {
    margin: 0 40px;
  }
  @media screen and (max-width: 550px) {
    margin: 0 20px;
    font-size: 1rem;
  }
  @media screen and (max-width: 470px) {
    margin: 0 15px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 430px) {
    margin: 0 10px;
  }
`;

export default Label;
