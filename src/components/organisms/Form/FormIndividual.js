import React from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/molecules/Form/FormInput';
import {
  name as nameForm,
  email as emailForm,
  tel as telForm,
  city as cityForm,
  postCode as postCodeForm,
  message as messageForm,
} from 'data/form';

function FormIndividual({ data, inputChange }) {
  const { name, email, tel, city, postCode, message } = data;

  return (
    <>
      <FormInput name={nameForm.name} label={nameForm.label} value={name} onChange={inputChange} />
      <FormInput
        type="email"
        name={emailForm.name}
        label={emailForm.label}
        value={email}
        onChange={inputChange}
      />
      <FormInput
        type="tel"
        name={telForm.name}
        label={telForm.label}
        pattern={telForm.pattern}
        value={tel}
        onChange={inputChange}
      />
      <FormInput name={cityForm.name} label={cityForm.label} value={city} onChange={inputChange} />
      <FormInput
        name={postCodeForm.name}
        label={postCodeForm.label}
        pattern={postCodeForm.pattern}
        value={postCode}
        onChange={inputChange}
      />
      <FormInput
        textarea
        name={messageForm.name}
        label={messageForm.label}
        value={message}
        onChange={inputChange}
      />
    </>
  );
}

FormIndividual.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default FormIndividual;
