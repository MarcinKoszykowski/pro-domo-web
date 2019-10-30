import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'data/routes';
import error from 'data/error';
import Button from '../atoms/Button';

const HyperLinkButton = () => (
  <Link to={routes.main}>
    <Button>{error.button}</Button>
  </Link>
);

export default HyperLinkButton;
