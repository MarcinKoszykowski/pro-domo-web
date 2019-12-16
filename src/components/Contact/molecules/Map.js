import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { map } from 'data/alt';
import mapImage from 'assets/images/mapa-obszar-dzialania.png';
import Image from '../atoms/Image';

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
  transition-property: margin, width;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin: 10px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Map = () => {
  const { contactIsVisibility } = useContext(AppContext);

  return (
    <Wrapper>
      <Image elementVisibility={contactIsVisibility} src={mapImage} alt={map} />
    </Wrapper>
  );
};

export default Map;
