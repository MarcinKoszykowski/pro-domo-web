import styled, { css } from 'styled-components';

const Image = styled.img`
  visibility: hidden;
  width: 100%;
  opacity: 0;
  transform: translateX(300px);
  transition: opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    `}
`;

export default Image;
