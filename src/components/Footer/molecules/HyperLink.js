import React from 'react';
import footer from 'data/footer';
import Text from '../atoms/Text';
import Link from '../atoms/Link';

const { code, link, created } = footer;

const HyperLink = () => (
  <Text>
    {created}
    <Link rel="noopener noreferrer" target="_blank" href={link}>
      {code}
    </Link>
  </Text>
);

export default HyperLink;
