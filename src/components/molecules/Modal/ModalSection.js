import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import phone from 'data/phone';
import ModalText from 'components/atoms/Modal/ModalText';
import ModalPhone from 'components/atoms/Modal/ModalPhone';

const Wrapper = styled.div`
  text-align: center;
`;

const ModalSection = ({ city }) => (
  <Wrapper>
    <ModalText>{phone[city].city}</ModalText>
    <ModalPhone href={phone[city].href}>{phone[city].phone}</ModalPhone>
    {phone[city].phone_2 && (
      <ModalPhone href={phone[city].href_2}>{phone[city].phone_2}</ModalPhone>
    )}
  </Wrapper>
);

ModalSection.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ModalSection;
