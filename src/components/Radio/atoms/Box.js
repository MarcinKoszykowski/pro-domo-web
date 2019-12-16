import styled from 'styled-components';
import { grey_dark } from 'styled/colors';

const Box = styled.div`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid ${grey_dark};
  transition-property: margin, width, height, border;

  @media screen and (max-width: 470px) {
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border: 1.5px solid ${grey_dark};
  }
`;

export default Box;
