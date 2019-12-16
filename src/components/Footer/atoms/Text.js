import styled from 'styled-components';
import { grey } from 'styled/colors';

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  width: 50%;
  color: ${grey};
  transition-property: padding, font;

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 750px) {
    padding: 7px 0;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
    padding: 5px 0;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export default Text;
