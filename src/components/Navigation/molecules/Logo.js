import React from 'react';
import logoImage from 'assets/images/logo.png';
import { logo } from 'data/alt';
import { main } from 'data/routes';
import Image from '../atoms/Image';

const Logo = () => (
  <a href={main}>
    <Image src={logoImage} alt={logo} />
  </a>
);

export default Logo;
