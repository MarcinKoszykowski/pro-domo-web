import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animations from 'styled/animations';
import Text from '../atoms/Text';

const Wrapper = styled.li`
  display: inline;
  text-align: right;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 7px;
  animation: ${animations.opacityZeroToOne} 0.5s ease 0.5s backwards;
  transition: font-size 0.2s, margin 0.2s;

  @media screen and (min-width: 1800px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 990px) {
    font-size: 1.1rem;
    margin: 0 4px;
  }
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const HyperLink = ({ link, children }) => (
  <Link to={link}>
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  </Link>
);

HyperLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HyperLink;
