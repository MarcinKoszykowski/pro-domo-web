import React from 'react';
import PropTypes from 'prop-types';
import RadioLabel from 'components/atoms/Form/RadioLable';
import RadioInput from 'components/atoms/Form/RadioInput';
import RadioBox from 'components/atoms/Form/RadioBox';

const Radio = ({ id, checked, onChange, children }) => (
  <RadioLabel>
    <RadioInput id={id} type="radio" checked={checked} onChange={onChange} />
    <RadioBox />
    {children}
  </RadioLabel>
);

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Radio;
