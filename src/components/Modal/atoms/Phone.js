import styled, { css } from 'styled-components';

const Phone = styled.a`
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  transition-property: font;

  @media screen and (min-width: 1800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  ${({ office }) =>
    office &&
    css`
      display: inline-block;
      margin: 0 15px;
      transition-property: font, margin;

      @media screen and (max-width: 600px) {
        margin: 0 10px;
      }
    `}
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export default Phone;
