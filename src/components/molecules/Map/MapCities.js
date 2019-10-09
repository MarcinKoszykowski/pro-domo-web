import React from 'react';
import MapCity from 'components/atoms/Map/MapCity';

const MapCities = ({ cities, map, cityButtonOnClick }) =>
  cities.map(city => (
    <MapCity onClick={() => cityButtonOnClick(city)} key={map.key(city)}>
      {city}
    </MapCity>
  ));

export default MapCities;
