import React from 'react';
import PropTypes from 'prop-types';
import City from '../atoms/City';

const Cities = ({ cities, contact, cityButtonOnClick }) => {
  return cities.map(city => (
    <City onClick={() => cityButtonOnClick(city)} key={contact.key(city)}>
      {city}
    </City>
  ));
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  contact: PropTypes.shape({
    key: PropTypes.func.isRequired,
  }).isRequired,
  cityButtonOnClick: PropTypes.func.isRequired,
};

export default Cities;
