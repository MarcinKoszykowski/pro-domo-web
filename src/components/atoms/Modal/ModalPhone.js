import styled, { css } from 'styled-components';

const Phone = styled.a`
  display: block;
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: font-size 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  ${({ office }) =>
    office &&
    css`
      margin: 0 20px;
      transition: font-size 0.2s, margin 0.2s;
      @media screen and (max-width: 600px) {
        margin: 0 10px;
      }
    `}
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export default Phone;
