import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { individual, firm } from 'data/radio';
import Radio from 'components/molecules/Form/Radio';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px auto;
  transition: margin 0.2s;

  @media screen and (max-width: 550px) {
    margin: 25px auto;
  }
  @media screen and (max-width: 470px) {
    margin: 20px auto;
  }
  @media screen and (max-width: 470px) {
    margin: 20px auto 10px;
  }
`;

const FormRadio = ({ radioButtonOnChange, type }) => (
  <Wrapper>
    <Radio
      id={individual.type}
      checked={type === individual.type}
      onChange={() => radioButtonOnChange(individual.type)}
    >
      {individual.label}
    </Radio>
    <Radio
      id={firm.type}
      checked={type === firm.type}
      onChange={() => radioButtonOnChange(firm.type)}
    >
      {firm.label}
    </Radio>
  </Wrapper>
);

FormRadio.propTypes = {
  radioButtonOnChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormRadio;
