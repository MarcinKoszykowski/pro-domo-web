import styled from 'styled-components';
import { grey_light } from 'styled/colors';

const Text = styled.p`
  color: ${grey_light};
  text-align: center;
  font-size: 0.9rem;
  margin: 8px 0;
  padding: 3px 0;
  transition-property: font, margin;

  @media screen and (min-width: 1800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    margin: 3px 0;
  }
`;

export default Text;
