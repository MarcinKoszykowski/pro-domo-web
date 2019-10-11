import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from 'components/atoms/Form/Textarea';
import Input from 'components/atoms/Form/Input';
import Label from 'components/atoms/Form/Label';
import Bar from 'components/atoms/Form/Bar';

const Wrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
  transition: font-size 0.2s;

  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.85rem;
  }
`;

const FormInput = ({ type, textarea, name, label, value, onChange, pattern }) => (
  <Wrapper>
    {textarea ? (
      <Textarea
        onChange={onChange}
        name={name}
        id={name}
        required
        maxLength={350}
        placeholder=" "
        value={value}
      />
    ) : (
      <Input
        type={type}
        name={name}
        id={name}
        required
        maxLength={100}
        placeholder=" "
        pattern={pattern}
        onChange={onChange}
        value={value}
      />
    )}
    <Label htmlFor={name}>{label}</Label>
    <Bar />
  </Wrapper>
);

FormInput.propTypes = {
  textarea: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
  textarea: false,
  pattern: null,
};

export default FormInput;
