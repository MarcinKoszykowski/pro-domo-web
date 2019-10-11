import styled from 'styled-components';
import RadioBox from 'components/atoms/Form/RadioBox';
import { greyDark, white } from 'styled/colors';

const RadioInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked + ${RadioBox} {
    cursor: pointer;
    background-color: ${greyDark};
    box-shadow: inset 0 0 0 2px ${white};
  }
`;

export default RadioInput;
