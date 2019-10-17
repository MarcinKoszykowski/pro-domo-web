import React, { useState } from 'react';
import styled from 'styled-components';
import FormTitle from 'components/atoms/Form/FormTitle';
import FormRadio from 'components/organisms/Form/FormRadio';
import FormFirm from 'components/organisms/Form/FormFirm';
import FormIndividual from 'components/organisms/Form/FormIndividual';
import { title, button } from 'data/form';
import { individual, firm } from 'data/radio';
import { blue, grey } from 'styled/colors';
import Button from '../components/atoms/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Form = styled.form`
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

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  margin: 50px auto;
  padding: 10px 16px;
  transition: padding 0.2s, margin 0.2s, font 0.2s, color 0.2s, transform 0.2s, border 0.2s;

  @media screen and (min-width: 1800px) {
    margin: 60px auto;
    font-size: 1.3rem;
    padding: 12px 18px;
  }
  @media screen and (max-width: 950px) {
    margin: 40px auto;
    font-size: 1.1rem;
    padding: 8px 14px;
  }
  @media screen and (max-width: 400px) {
    margin: 30px auto;
    font-size: 1rem;
    padding: 8px 14px;
  }
`;

function FormTemplate() {
  const { type: individualType } = individual;
  const { type: firmType } = firm;

  const [type, setType] = useState(individualType);
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

  const handleRadioButtonChange = value => {
    setType(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <FormTitle>{title}</FormTitle>
      <FormRadio radioButtonOnChange={handleRadioButtonChange} type={type} />
      <Form autoComplete="off" onSubmit={e => handleSubmit(e)}>
        {type === firmType ? (
          <FormFirm data={data} inputChange={handleInputChange} />
        ) : (
          <FormIndividual data={data} inputChange={handleInputChange} />
        )}
        <StyledButton color={blue} hoverColor={grey}>
          {button}
        </StyledButton>
      </Form>
    </Wrapper>
  );
}

export default FormTemplate;
