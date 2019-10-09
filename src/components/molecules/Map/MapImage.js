import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import animations from 'styled/animations';
import alt from 'data/alt';
import mapImage from 'assets/images/mapa-obszar-dzialania.png';

const Image = styled.img`
  visibility: hidden;
  width: 100%;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      animation: ${animations.cityImageAnimation} 1s ease-out 0.5s backwards;
    `}
`;

const Wrapper = styled.div`
  text-align: center;
  margin-left: 20px;
  transition: margin-left 0.2s, width 0.2s;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin-left: 10px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MapImage = ({ isVisibility }) => (
  <Wrapper>
    <Image visible={isVisibility} src={mapImage} alt={alt.map} />
  </Wrapper>
);

MapImage.propTypes = {
  isVisibility: PropTypes.bool.isRequired,
};

export default MapImage;
