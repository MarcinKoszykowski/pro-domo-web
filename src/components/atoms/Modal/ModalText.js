import styled, { css } from 'styled-components';
import colors from 'styled/colors';

const ModalText = styled.p`
  color: ${colors.grey};
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 5px;
  transition: font-size 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  ${({ address }) =>
    address &&
    css`
      display: block;
      margin: 5px;

      @media screen and (max-width: 400px) {
        font-size: 1rem;
      }
    `}
`;

export default ModalText;
