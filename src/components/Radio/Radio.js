import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/Radio/atoms/Lable';
import Input from 'components/Radio/atoms/Input';
import Box from 'components/Radio/atoms/Box';

const Radio = ({ id, checked, onChange, children }) => (
  <Label>
    <Input id={id} type="radio" checked={checked} onChange={onChange} />
    <Box />
    {children}
  </Label>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Radio;
