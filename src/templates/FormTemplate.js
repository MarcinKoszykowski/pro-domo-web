import React, { useState } from 'react';
import styled from 'styled-components';
import { title } from 'data/form';
import { individual } from 'data/radio';
import Title from 'components/Form/atoms/Title';
import Form from 'components/Form/Form';
import Confirmation from 'components/Confirmation/Confirmation';
import Radio from './RadioTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormTemplate = () => {
  const [type, setType] = useState(individual.type);
  const [isVisibility, setIsVisibility] = useState(true);
  const [error, setError] = useState(false);

  const handleRadioOnChange = value => {
    setType(value);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Radio radioButtonOnChange={handleRadioOnChange} type={type} />
      <Form setError={setError} setIsVisibility={setIsVisibility} type={type} />
      <Confirmation isVisibility={isVisibility} error={error} />
    </Wrapper>
  );
};

export default FormTemplate;
