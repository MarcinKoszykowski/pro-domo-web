import styled from 'styled-components';
import colors from 'styled/colors';

const ErrorText = styled.p`
  font-weight: 500;
  font-size: ${({ error }) => (error ? `4rem` : `2rem`)};
  color: ${({ error }) => (error ? colors.orange : colors.greyDark)};
  margin: 0 20px;
  margin-bottom: ${({ error }) => (error ? `20px` : null)};
  transition: font 0.2s, margin 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: ${({ error }) => (error ? `4.5rem` : `2.2rem`)};
    margin-bottom: ${({ error }) => (error ? `30px` : null)};
  }
  @media screen and (max-width: 840px) {
    font-size: ${({ error }) => (error ? `3.6rem` : `1.7rem`)};
    margin-bottom: ${({ error }) => (error ? `15px` : null)};
  }
  @media screen and (max-width: 600px) {
    font-size: ${({ error }) => (error ? `3.2rem` : `1.4rem`)};
    margin-bottom: ${({ error }) => (error ? `10px` : null)};
  }
  @media screen and (max-width: 500px) {
    font-size: ${({ error }) => (error ? `2.8rem` : `1.2rem`)};
  }
`;

export default ErrorText;
