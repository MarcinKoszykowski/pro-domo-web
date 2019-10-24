import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import animations from 'styled/animations';
import Map from './molecules/Map';
import Text from './organisms/Text';

const { cityTextAnimation } = animations;

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
  width: 100%;
  visibility: hidden;

  ${({ elementVisibility }) =>
    elementVisibility &&
    css`
      visibility: visible;
      animation: ${cityTextAnimation} 1s ease-out 0.5s backwards;
    `}
`;

const Contact = ({ contactIsVisibility, handleSectionButton, handleOfficeButton }) => (
  <Wrapper>
    <Box elementVisibility={contactIsVisibility}>
      <Text main cityButtonOnClick={handleSectionButton} />
      <Text cityButtonOnClick={handleOfficeButton} />
    </Box>
    <Map />
  </Wrapper>
);

Contact.propTypes = {
  contactIsVisibility: PropTypes.bool.isRequired,
  handleSectionButton: PropTypes.func.isRequired,
  handleOfficeButton: PropTypes.func.isRequired,
};

export default Contact;
