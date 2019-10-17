import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import animations from 'styled/animations';
import alt from 'data/alt';
import mapImage from 'assets/images/mapa-obszar-dzialania.png';
import AppContext from 'context';

const { map } = alt;
const { cityImageAnimation } = animations;
const Image = styled.img`
  visibility: hidden;
  width: 100%;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      animation: ${cityImageAnimation} 1s ease-out 0.5s backwards;
    `}
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
  transition: margin-left 0.2s, width 0.2s;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin: 10px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

function MapImage() {
  const { mapIsVisibility } = useContext(AppContext);

  return (
    <Wrapper>
      <Image elementVisibility={mapIsVisibility} src={mapImage} alt={map} />
    </Wrapper>
  );
}

export default MapImage;
