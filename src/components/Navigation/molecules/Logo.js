import React from 'react';
import logoImage from 'assets/images/logo.png';
import alt from 'data/alt';
import routes from 'data/routes';
import Image from '../atoms/Image';

const { main } = routes;
const { logo } = alt;

const Logo = () => (
  <a href={main}>
    <Image src={logoImage} alt={logo} />
  </a>
);

export default Logo;
