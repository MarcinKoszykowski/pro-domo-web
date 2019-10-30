import styled, { css } from 'styled-components';
import animations from 'styled/animations';

const Image = styled.img`
  visibility: hidden;
  margin: 0 auto;
  width: 90%;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      animation: ${animations.loanImageAnimation} 1s ease 0.5s backwards;
    `}
`;

export default Image;
