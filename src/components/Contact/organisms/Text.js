import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { section, office } from 'data/contact';
import { section as citiesSection, office as citiesOffice } from 'data/cities';
import Title from 'components/Contact/atoms/Title';
import Cities from 'components/Contact/molecules/Cities';

const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
  transition: margin 0.2s;

  @media screen and (max-width: 1350px) {
    margin: 35px 0;
  }
  @media screen and (max-width: 1100px) {
    margin: 30px 0;
  }
  @media screen and (max-width: 950px) {
    margin: 25px 0;
  }
  @media screen and (max-width: 800px) {
    margin: 20px 0;
  }
`;

function Text({ main, cityButtonOnClick }) {
  const contact = main ? section : office;
  const cities = main ? citiesSection : citiesOffice;

  return (
    <Wrapper>
      <Title>{contact.title}</Title>
      <Cities cityButtonOnClick={cityButtonOnClick} cities={cities} contact={contact} />
    </Wrapper>
  );
}

Text.propTypes = {
  cityButtonOnClick: PropTypes.func.isRequired,
  main: PropTypes.bool,
};

Text.defaultProps = {
  main: false,
};

export default Text;
