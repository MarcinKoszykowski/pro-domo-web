import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavigationButton from 'components/atoms/Navigation/NavigationButton';

const NavigationHyperLinkButton = ({ link, type }) => (
  <Link to={link}>
    {type === 'career' && <NavigationButton career />}
    {type === 'contact' && <NavigationButton contact />}
    {type === 'faq' && <NavigationButton faq />}
  </Link>
);

NavigationHyperLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['career', 'contact', 'faq']).isRequired,
};

export default NavigationHyperLinkButton;
