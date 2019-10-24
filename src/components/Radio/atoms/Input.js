import styled from 'styled-components';
import { greyDark, white } from 'styled/colors';
import Box from './Box';

const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked + ${Box} {
    cursor: pointer;
    background-color: ${greyDark};
    box-shadow: inset 0 0 0 2px ${white};
  }
`;

export default Input;
