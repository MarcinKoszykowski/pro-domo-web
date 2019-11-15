import React from 'react';
import { code, link, created } from 'data/footer';
import Text from '../atoms/Text';
import Link from '../atoms/Link';

const HyperLink = () => (
  <Text>
    {created}
    <Link rel="noopener noreferrer" target="_blank" href={link}>
      {code}
    </Link>
  </Text>
);

export default HyperLink;
