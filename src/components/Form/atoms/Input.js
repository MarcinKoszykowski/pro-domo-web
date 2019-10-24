import styled from 'styled-components';
import { grey, orange } from 'styled/colors';
import Bar from './Bar';
import Label from './Label';

const Input = styled.input`
  color: ${grey};
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background: ${orange};
    }
    & + ${Label} {
      top: -22px;
      font-size: 0.8rem;

      @media screen and (max-width: 550px) {
        font-size: 0.75rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 0.7rem;
      }
    }
  }

  &:not(:placeholder-shown) + ${Label} {
    top: -22px;
    font-size: 0.8rem;

    @media screen and (max-width: 550px) {
      font-size: 0.75rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.7rem;
    }
  }
`;

export default Input;
