import styled from 'styled-components';

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.2;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }
`;

export default Title;
