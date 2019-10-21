import styled from 'styled-components';

const Text = styled.p`
  width: 100%;
  padding-left: 25px;
  transition: color 0.2s ease, padding 0.2s;

  @media screen and (max-width: 900px) {
    padding-left: 15px;
  }
  @media screen and (max-width: 400px) {
    padding-left: 10px;
  }
`;

export default Text;
