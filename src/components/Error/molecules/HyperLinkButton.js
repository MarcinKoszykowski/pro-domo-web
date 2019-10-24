import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'data/routes';
import error from 'data/error';
import Button from '../atoms/Button';

const { main } = routes;
const { button } = error;

const HyperLinkButton = () => (
  <Link to={main}>
    <Button>{button}</Button>
  </Link>
);

export default HyperLinkButton;
