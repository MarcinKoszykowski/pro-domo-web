import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import messageValue from 'data/email';
import { button } from 'data/form';
import { blue, grey } from 'styled/colors';
import emailPHP from 'email/email.php';
import Button from './atoms/Button';
import Firm from './organisms/Firm';
import Individual from './organisms/Individual';

const Wrapper = styled.form`
  margin: 20px auto 60px;
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: max-width 0.2s, margin 0.2s;

  @media screen and (max-width: 950px) {
    margin: 20px auto 40px;
    max-width: 80%;
  }
  @media screen and (max-width: 700px) {
    max-width: 85%;
  }
`;

function Form({ type, setError, setIsVisibility }) {
  const [data, setData] = useState({
    name: '',
    firm: '',
    nip: '',
    email: '',
    tel: '',
    city: '',
    postCode: '',
    message: '',
  });

  const handleInputChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const dataPHP = messageValue(data, type);

    axios
      .post(emailPHP, dataPHP, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(response => {
        if (response.status === 200 && response.statusText === 'OK') {
          setError(false);
          setIsVisibility(true);
          setTimeout(() => {
            setIsVisibility(false);
          }, 2000);
        } else {
          setError(true);
          setIsVisibility(true);
          setTimeout(() => {
            setIsVisibility(false);
          }, 2000);
        }
      });
  };

  return (
    <Wrapper autoComplete="off" onSubmit={e => handleSubmit(e)}>
      {type === 'firm' ? (
        <Firm data={data} inputChange={handleInputChange} />
      ) : (
        <Individual data={data} inputChange={handleInputChange} />
      )}
      <Button color={blue} hoverColor={grey}>
        {button}
      </Button>
    </Wrapper>
  );
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  setIsVisibility: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Form;
