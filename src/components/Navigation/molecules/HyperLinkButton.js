import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Navigation/atoms/Button';

const HyperLinkButton = ({ link, type }) => (
  <Link to={link}>
    {type === 'career' && <Button career />}
    {type === 'contact' && <Button contact />}
    {type === 'faq' && <Button faq />}
  </Link>
);

HyperLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['career', 'contact', 'faq']).isRequired,
};

export default HyperLinkButton;
