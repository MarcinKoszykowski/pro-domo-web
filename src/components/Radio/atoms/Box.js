import styled from 'styled-components';
import { greyDark } from 'styled/colors';

const Box = styled.div`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid ${greyDark};
  transition: margin 0.2s, width 0.2s, height 0.2s, border 0.2s;

  @media screen and (max-width: 470px) {
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border: 1.5px solid ${greyDark};
  }
`;

export default Box;
