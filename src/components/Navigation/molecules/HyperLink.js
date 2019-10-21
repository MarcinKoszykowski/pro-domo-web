import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import animations from 'styled/animations';
import Text from 'components/Navigation/atoms/Text';

const { opacityZeroToOne } = animations;
const Wrapper = styled.li`
  display: inline;
  text-align: right;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0 7px;
  animation: ${opacityZeroToOne} 0.5s ease 0.5s backwards;
  transition: font-size 0.2s, margin 0.2s, display 0.5s;

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
