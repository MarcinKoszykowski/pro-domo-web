import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white, orange, blue } from 'styled/colors';
import Text from '../atoms/Text';

const StyledText = styled(Text)`
  color: ${white};
  cursor: pointer;
  transition: transform 0.2s ease, font-size 0.2s, margin 0.2s;

  &:hover {
    color: ${orange};
    transform: scale(1.1);
  }

  &:active {
    color: ${blue};
  }
`;

const HyperLink = ({ link, children }) => (
  <Link to={link}>
    <StyledText>{children}</StyledText>
  </Link>
);

HyperLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HyperLink;
