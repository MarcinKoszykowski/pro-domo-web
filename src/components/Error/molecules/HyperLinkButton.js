import React from 'react';
import { Link } from 'react-router-dom';
import { main } from 'data/routes';
import { button } from 'data/error';
import Button from '../atoms/Button';

const HyperLinkButton = () => (
  <Link to={main}>
    <Button>{button}</Button>
  </Link>
);

export default HyperLinkButton;
