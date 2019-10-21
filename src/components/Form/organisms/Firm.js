import React from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/Form/molecules/FormInput';
import {
  name as nameForm,
  firm as firmForm,
  nip as nipForm,
  email as emailForm,
  tel as telForm,
  city as cityForm,
  postCode as postCodeForm,
  message as messageForm,
} from 'data/form';

function Firm({ data, inputChange }) {
  const { name, firm, nip, email, tel, city, postCode, message } = data;

  return (
    <>
      <FormInput name={nameForm.name} label={nameForm.label} value={name} onChange={inputChange} />
      <FormInput name={firmForm.name} label={firmForm.label} value={firm} onChange={inputChange} />
      <FormInput
        name={nipForm.name}
        label={nipForm.label}
        pattern={nipForm.pattern}
        value={nip}
        onChange={inputChange}
      />
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

Firm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    firm: PropTypes.string.isRequired,
    nip: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Firm;
