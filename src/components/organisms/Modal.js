import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white, colorWithOpacity, black } from 'styled/colors';
import ModalButton from 'components/atoms/Modal/ModalButton';
import ModalSection from 'components/molecules/Modal/ModalSection';
import ModalOffice from 'components/molecules/Modal/ModalOffice';

const Wrapper = styled.div`
  display: inline-flex;
  position: absolute;
  margin: 0 auto;
  width: max-content;
  top: 10%;
  bottom: 10%;
  padding: 0 40px;
  border-radius: 15px;
  left: 0;
  right: 0;
  z-index: 2;
  align-items: center;
  opacity: 0.95;
  background-color: ${white};
  box-shadow: 0 0 5px 1px ${colorWithOpacity(black, 0.5)};
  transition: top 0.2s, right 0.2s, padding 0.2s, opacity 0.5s ease, transform 0.5s;

  @media screen and (max-width: 600px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 400px) {
    padding: ${({ office }) => (office ? `0 15px` : null)};
  }
`;

const Modal = ({ office, city, modalButtonOnClick }) => (
  <Wrapper office={office}>
    {office ? <ModalOffice city={city} /> : <ModalSection city={city} />}
    <ModalButton onClick={modalButtonOnClick} />
  </Wrapper>
);

Modal.propTypes = {
  city: PropTypes.string.isRequired,
  modalButtonOnClick: PropTypes.func.isRequired,
  office: PropTypes.bool.isRequired,
};

export default Modal;
