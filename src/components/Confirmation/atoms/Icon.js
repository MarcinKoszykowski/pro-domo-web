import styled from 'styled-components';

const Icon = styled.img`
  width: 150px;
  height: 150px;
  transition-property: width, height;

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 550px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 420px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 350px) {
    width: 60px;
    height: 60px;
  }
`;

export default Icon;
