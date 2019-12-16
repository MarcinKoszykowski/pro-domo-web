import styled from 'styled-components';

const Text = styled.p`
  width: 100%;
  padding-left: 25px;
  transition-property: color, padding;

  @media screen and (max-width: 900px) {
    padding-left: 15px;
  }
  @media screen and (max-width: 400px) {
    padding-left: 10px;
  }
`;

export default Text;
