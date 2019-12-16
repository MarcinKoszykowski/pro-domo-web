import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { white, colorWithOpacity, black } from 'styled/colors';
import correctIcon from 'assets/icons/check-circle-regular.svg';
import errorIcon from 'assets/icons/times-circle-regular.svg';
import Icon from './atoms/Icon';
import Text from './atoms/Text';

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: ${({ isVisibility }) =>
    isVisibility ? `translate(-50%, 125px)` : `translate(-50%, -200%)`};
  background-color: ${white};
  text-align: center;
  padding: 40px;
  box-shadow: 0 0 5px 1px ${colorWithOpacity(black, 0.5)};
  border-radius: 15px;
  transition-property: transform, padding;

  @media screen and (max-width: 700px) {
    padding: 30px;
  }

  @media screen and (max-width: 550px) {
    padding: 20px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 10px;
  }

  @media screen and (max-width: 350px) {
    padding: 15px 5px;
  }
`;

const Confirmation = ({ isVisibility, error }) => (
  <Wrapper isVisibility={isVisibility}>
    <Icon src={error ? errorIcon : correctIcon} />
    <Text>{error ? 'Błąd podczas wysyłania wiadomości' : 'Wiadomość została wysłana'}</Text>
  </Wrapper>
);

Confirmation.propTypes = {
  isVisibility: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Confirmation;
