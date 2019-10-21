import styled, { css } from 'styled-components';
import animations from 'styled/animations';

const { cityImageAnimation } = animations;

const Image = styled.img`
  visibility: hidden;
  width: 100%;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      animation: ${cityImageAnimation} 1s ease-out 0.5s backwards;
    `}
`;

export default Image;
