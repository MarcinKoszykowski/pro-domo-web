import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import address from 'data/address';
import Text from '../atoms/Text';
import Phone from '../atoms/Phone';

const Wrapper = styled.div`
  text-align: center;

  ${({ phone }) =>
    phone &&
    css`
      display: block;
      margin-top: 10px;
    `}
`;

const Office = ({ city }) => (
  <Wrapper>
    <Text address>{address[city].address_1}</Text>
    <Text address>{address[city].address_2}</Text>
    <Wrapper phone>
      <Phone office href={address[city].href}>
        {address[city].phone}
      </Phone>
      {address[city].href_2 && (
        <Phone office href={address[city].href_2}>
          {address[city].phone_2}
        </Phone>
      )}
    </Wrapper>
  </Wrapper>
);

Office.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Office;
