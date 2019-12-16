import styled from 'styled-components';
import markerIcon from 'assets/icons/map-marker.svg';
import { orange_dark } from 'styled/colors';

const City = styled.span`
  position: relative;
  display: inline-flex;
  font-size: 1.1rem;
  margin: 5px 35px 5px 5px;
  cursor: pointer;
  transition-property: font, margin;

  &:hover {
    color: ${orange_dark};
  }

  @media screen and (min-width: 1800px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 1rem;
    margin: 5px 30px 5px 5px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 950px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 850px) {
    margin: 3px 25px 3px 3px;
    font-size: 0.7rem;
  }

  &::before {
    content: '';
    background: url(${markerIcon}) no-repeat center center;
    background-size: contain;
    position: absolute;
    left: -55px;
    top: 0;
    height: 100%;
    width: 80px;
    transition-property: width, left;

    @media screen and (max-width: 1350px) {
      width: 75px;
      left: -50px;
    }
    @media screen and (max-width: 1100px) {
      width: 70px;
    }
    @media screen and (max-width: 850px) {
      width: 65px;
      left: -45px;
    }
    @media screen and (max-width: 600px) {
      width: 60px;
      left: -40px;
    }
  }
`;

export default City;
