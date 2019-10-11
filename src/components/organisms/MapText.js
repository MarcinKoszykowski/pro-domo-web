import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { section, office } from 'data/map';
import MapTitle from 'components/atoms/Map/MapTitle';
import MapCities from 'components/molecules/Map/MapCities';
import { section as citiesSection, office as citiesOffice } from 'data/cities';

const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
  transition: margin 0.2s;

  @media screen and (max-width: 1350px) {
    margin: 35px 0;
  }
  @media screen and (max-width: 1100px) {
    margin: 30px 0;
  }
  @media screen and (max-width: 950px) {
    margin: 25px 0;
  }
  @media screen and (max-width: 800px) {
    margin: 20px 0;
  }
`;

function MapText({ main, cityButtonOnClick }) {
  const map = main ? section : office;
  const cities = main ? citiesSection : citiesOffice;

  return (
    <Wrapper>
      <MapTitle>{map.title}</MapTitle>
      <MapCities cityButtonOnClick={cityButtonOnClick} cities={cities} map={map} />
    </Wrapper>
  );
}

MapText.propTypes = {
  cityButtonOnClick: PropTypes.func.isRequired,
  main: PropTypes.bool,
};

MapText.defaultProps = {
  main: false,
};

export default MapText;
