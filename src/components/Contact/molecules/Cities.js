import React from 'react';
import City from '../atoms/City';

function Cities({ cities, contact, cityButtonOnClick }) {
  const { key } = contact;

  return cities.map(city => (
    <City onClick={() => cityButtonOnClick(city)} key={key(city)}>
      {city}
    </City>
  ));
}

export default Cities;
