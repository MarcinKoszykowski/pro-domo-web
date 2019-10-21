import React from 'react';
import styled from 'styled-components';
import AboutUs from 'components/AboutUs/AboutUs';

const Section = styled.section`
  padding: 60px;
  transition: margin 0.2s, width 0.2s, padding 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1480px;
  }
  @media screen and (max-width: 1200px) {
    padding: 50px;
  }
  @media screen and (max-width: 950px) {
    padding: 40px;
  }
  @media screen and (max-width: 700px) {
    padding: 30px;
  }
`;

const AboutUsTemplate = () => (
  <Section>
    <AboutUs />
  </Section>
);

export default AboutUsTemplate;
