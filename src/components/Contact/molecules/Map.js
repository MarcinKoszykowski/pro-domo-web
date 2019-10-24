import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import alt from 'data/alt';
import mapImage from 'assets/images/mapa-obszar-dzialania.png';
import Image from '../atoms/Image';

const { map } = alt;

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

function Map() {
  const { contactIsVisibility } = useContext(AppContext);

  return (
    <Wrapper>
      <Image elementVisibility={contactIsVisibility} src={mapImage} alt={map} />
    </Wrapper>
  );
}

export default Map;
