import styled from 'styled-components';
import { colorWithOpacity, orange } from 'styled/colors';

const Bar = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 1px;
  background: ${colorWithOpacity(orange, 0.6)};
  transition-property: background;
`;

export default Bar;
