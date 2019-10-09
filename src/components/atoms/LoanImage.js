import styled, { css } from 'styled-components';
import animations from 'styled/animations';

const LoanImage = styled.img`
  visibility: hidden;
  margin: 0 auto;
  width: 90%;

  ${({ isVisibility }) =>
    isVisibility &&
    css`
      visibility: visible;
      animation: ${animations.loanImageAnimation} 1s ease 0.5s backwards;
    `}
`;

export default LoanImage;
