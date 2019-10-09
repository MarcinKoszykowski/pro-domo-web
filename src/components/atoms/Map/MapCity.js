import styled from 'styled-components';
import markerIcon from 'assets/icons/map-marker.svg';
import colors from 'styled/colors';

const MapCity = styled.p`
  position: relative;
  display: inline-flex;
  font-size: 1.1rem;
  margin: 5px 35px 5px 5px;
  cursor: pointer;
  transition: font-size 0.2s, margin 0.2s;

  &:hover {
    color: ${colors.orangeDark};
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
    content: url(${markerIcon});
    position: absolute;
    left: -55px;
    top: -10px;
    height: 100%;
    width: 80px;
    transform: scale(0.2);
    transition: width 0.2s, left 0.2s, top 0.2s;

    @media screen and (max-width: 1350px) {
      width: 75px;
      left: -50px;
    }
    @media screen and (max-width: 1100px) {
      top: -7.5px;
      width: 70px;
    }
    @media screen and (max-width: 850px) {
      width: 65px;
      top: -6.25px;
      left: -45px;
    }
    @media screen and (max-width: 600px) {
      width: 60px;
      left: -40px;
    }
  }
`;

export default MapCity;
