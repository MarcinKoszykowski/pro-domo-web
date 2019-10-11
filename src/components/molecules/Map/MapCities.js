import React from 'react';
import MapCity from 'components/atoms/Map/MapCity';

function MapCities({ cities, map, cityButtonOnClick }) {
  const { key } = map;

  return cities.map(city => (
    <MapCity onClick={() => cityButtonOnClick(city)} key={key(city)}>
      {city}
    </MapCity>
  ));
}

export default MapCities;
