import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WidgetsText from 'components/atoms/WidgetsText';
import colors from 'styled/colors';

const StyledWidgetText = styled(WidgetsText)`
  color: ${colors.white};
  cursor: pointer;
  transition: transform 0.2s ease, font-size 0.2s, margin 0.2s;

  &:hover {
    color: ${colors.orange};
    transform: scale(1.1);
  }

  &:active {
    color: ${colors.blue};
  }
`;

const WidgetsHyperLink = ({ link, children }) => (
  <Link to={link}>
    <StyledWidgetText>{children}</StyledWidgetText>
  </Link>
);

WidgetsHyperLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default WidgetsHyperLink;
