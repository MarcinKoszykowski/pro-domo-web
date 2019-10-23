import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Firm from 'components/Form/organisms/Firm';
import Individual from 'components/Form/organisms/Individual';
import { button } from 'data/form';
import { blue, grey } from 'styled/colors';
import Button from 'components/Form/atoms/Button';
import emailPHP from 'email/email.php';
import axios from 'axios';
import messageValue from 'data/email';

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

function Form({ type }) {
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

    axios.post(emailPHP, dataPHP, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
};

export default Form;
