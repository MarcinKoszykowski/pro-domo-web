import React from 'react';
import styled from 'styled-components';
import FormTemplate from 'templates/FormTemplate';

const Section = styled.section`
  max-width: 1600px;
  margin: 0 auto;
`;

const Form = () => (
  <Section>
    <FormTemplate />
  </Section>
);

export default Form;
