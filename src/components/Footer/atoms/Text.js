import styled from 'styled-components';
import { grey } from 'styled/colors';

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${grey};
  transition: padding 0.2s, font-size 0.2s;

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 750px) {
    padding: 7px 0;
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
