import React from 'react';
import footer from 'data/footer';
import Text from 'components/Footer/atoms/Text';
import Link from 'components/Footer/atoms/Link';

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
