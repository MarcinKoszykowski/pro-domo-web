import styled from 'styled-components';

const Text = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 30px;
  transition-property: font, margin;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
    margin-top: 25px;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
    margin-top: 20px;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.9rem;
    margin-top: 15px;
    font-weight: 400;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.85rem;
    margin-top: 15px;
  }
`;

export default Text;
