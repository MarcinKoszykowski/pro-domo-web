import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import footer from 'data/footer';
import { blue, orangeDark, grey } from 'styled/colors';

const { code, link: linkFooter } = footer;
const Link = styled.a`
  color: ${blue};

  &:hover {
    color: ${orangeDark};
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    padding: 7px 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
    padding: 5px 0;
  }
`;

const Text = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${grey};
  transition: padding 0.2s, font-size 0.2s;

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 750px) {
    padding: 7px 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
    padding: 5px 0;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const FooterText = ({ link, children }) => (
  <Text>
    {children}
    {link && (
      <Link rel="noopener noreferrer" target="_blank" href={linkFooter}>
        {code}
      </Link>
    )}
  </Text>
);

FooterText.propTypes = {
  link: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

FooterText.defaultProps = {
  link: false,
};

export default FooterText;
