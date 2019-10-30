import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Map from './molecules/Map';
import Text from './organisms/Text';

const Wrapper = styled.div`
  align-items: center;
  padding: 10px 40px 20px 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transition: margin 0.2s, width 0.2s, padding 0.2s;

  @media screen and (max-width: 1100px) {
    padding: 10px 25px 20px 70px;
  }
  @media screen and (max-width: 850px) {
    padding: 0 15px 15px 60px;
  }
  @media screen and (max-width: 700px) {
    padding: 0 15px 15px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 0 10px 10px 40px;
  }
`;

const Box = styled.div`
  visibility: hidden;
  width: 100%;
  opacity: 0;
  transform: translateX(-300px);
  transition: opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    `}
`;

const Contact = ({ contactIsVisibility, sectionButtonOnClick, officeButtonOnClick }) => (
  <Wrapper>
    <Box elementVisibility={contactIsVisibility}>
      <Text main cityButtonOnClick={sectionButtonOnClick} />
      <Text cityButtonOnClick={officeButtonOnClick} />
    </Box>
    <Map />
  </Wrapper>
);

Contact.propTypes = {
  contactIsVisibility: PropTypes.bool.isRequired,
  sectionButtonOnClick: PropTypes.func.isRequired,
  officeButtonOnClick: PropTypes.func.isRequired,
};

export default Contact;
