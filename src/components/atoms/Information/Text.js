import styled from 'styled-components';

const Text = styled.p`
  margin-bottom: 15px;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
  }
`;

export default Text;
