import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import address from 'data/address';
import ModalText from 'components/atoms/Modal/ModalText';
import ModalPhone from 'components/atoms/Modal/ModalPhone';

const Wrapper = styled.div`
  text-align: center;

  ${({ phone }) =>
    phone &&
    css`
      display: block;
      margin-top: 10px;
    `}
`;

const ModalOffice = ({ city }) => (
  <Wrapper>
    <ModalText address>{address[city].address_1}</ModalText>
    <ModalText address>{address[city].address_2}</ModalText>
    <Wrapper phone>
      <ModalPhone office href={address[city].href}>
        {address[city].phone}
      </ModalPhone>
      {address[city].href_2 && (
        <ModalPhone office href={address[city].href_2}>
          {address[city].phone_2}
        </ModalPhone>
      )}
    </Wrapper>
  </Wrapper>
);

ModalOffice.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ModalOffice;
