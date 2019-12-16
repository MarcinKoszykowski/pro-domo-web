import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white, colorWithOpacity, black } from 'styled/colors';
import Button from './atoms/Button';
import Section from './molecules/Section';
import Office from './molecules/Office';

const Wrapper = styled.div`
  display: inline-flex;
  position: absolute;
  margin: 0 auto;
  width: ${({ office }) => (office ? `330px` : `200px`)};
  top: 10%;
  bottom: 10%;
  border-radius: 15px;
  left: 0;
  right: 0;
  z-index: 2;
  align-items: center;
  text-align: center;
  opacity: 0.95;
  background-color: ${white};
  box-shadow: 0 0 5px 1px ${colorWithOpacity(black, 0.5)};
  transition-property: top, right, opacity;

  @media screen and (max-width: 700px) {
    width: ${({ office }) => (office ? `280px` : `170px`)};
  }

  @media screen and (max-width: 500px) {
    width: ${({ office }) => (office ? `240px` : `140px`)};
  }
`;

const Modal = ({ toggleModal, office, city, modalButtonOnClick }) =>
  toggleModal && (
    <Wrapper office={office}>
      {office ? <Office city={city} /> : <Section city={city} />}
      <Button onClick={modalButtonOnClick} />
    </Wrapper>
  );

Modal.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  modalButtonOnClick: PropTypes.func.isRequired,
  office: PropTypes.bool.isRequired,
};

export default Modal;
