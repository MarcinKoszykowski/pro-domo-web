import React, { useState } from 'react';
import styled from 'styled-components';
import { title } from 'data/form';
import { individual } from 'data/radio';
import Title from 'components/Form/atoms/Title';
import Form from 'components/Form/Form';
import Radio from './RadioTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function FormTemplate() {
  const { type: individualType } = individual;

  const [type, setType] = useState(individualType);

  const handleRadioButtonChange = value => {
    setType(value);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Radio radioButtonOnChange={handleRadioButtonChange} type={type} />
      <Form type={type} />
    </Wrapper>
  );
}

export default FormTemplate;
