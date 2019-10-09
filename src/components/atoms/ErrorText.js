import styled, { css } from 'styled-components';
import colors from 'styled/colors';

const ErrorText = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: ${colors.greyDark};
  margin: 0 20px;
  transition: font 0.2s, margin 0.2s;

  ${({ error }) =>
    error &&
    css`
      font-size: 4rem;
      color: ${colors.orange};
      margin-bottom: 20px;

      @media screen and (min-width: 1800px) {
        font-size: 4.5rem;
        margin-bottom: 30px;
      }
      @media screen and (max-width: 840px) {
        font-size: 3.6rem;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 600px) {
        font-size: 3.2rem;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 500px) {
        font-size: 2.8rem;
      }
    `}

  @media screen and (min-width: 1800px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 840px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export default ErrorText;
