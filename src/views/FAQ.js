import React from 'react';
import styled from 'styled-components';
import FaqTemplate from 'templates/FaqTemplate';

const Section = styled.section`
  padding: 25px 150px 50px 225px;
  transition: padding 0.2s, margin 0.2s, width 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1225px;
  }

  @media screen and (max-width: 1150px) {
    padding: 25px 100px 50px 150px;
  }
  @media screen and (max-width: 1000px) {
    padding: 25px 75px 50px 100px;
  }
  @media screen and (max-width: 850px) {
    padding: 25px 50px 50px 65px;
  }
  @media screen and (max-width: 650px) {
    padding: 20px 50px 40px 40px;
  }
  @media screen and (max-width: 500px) {
    padding: 15px 40px 30px 20px;
  }
`;

const FAQ = () => (
  <Section>
    <FaqTemplate />
  </Section>
);

export default FAQ;
