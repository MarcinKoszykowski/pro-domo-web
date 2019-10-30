import React from 'react';
import logoImage from 'assets/images/logo.png';
import alt from 'data/alt';
import routes from 'data/routes';
import Image from '../atoms/Image';

const Logo = () => (
  <a href={routes.main}>
    <Image src={logoImage} alt={alt.logo} />
  </a>
);

export default Logo;
