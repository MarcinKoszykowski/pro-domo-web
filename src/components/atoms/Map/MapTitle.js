import styled from 'styled-components';

const MapTitle = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0 20px 30px;
  transition: font-size 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1100px) {
    margin: 0 20px 20px;
    font-size: 2rem;
  }
  @media screen and (max-width: 950px) {
    margin: 0 15px 15px;
    font-size: 1.7rem;
  }
  @media screen and (max-width: 750px) {
    margin: 0 10px 10px;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    margin: 0 10px 5px;
    font-size: 1.3rem;
  }
`;

export default MapTitle;
