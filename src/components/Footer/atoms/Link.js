import styled from 'styled-components';
import { blue, orangeDark } from 'styled/colors';

const Link = styled.a`
  color: ${blue};

  &:hover {
    color: ${orangeDark};
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    padding: 7px 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
    padding: 5px 0;
  }
`;

export default Link;
