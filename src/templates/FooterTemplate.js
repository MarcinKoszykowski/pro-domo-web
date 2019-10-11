import React from 'react';
import styled from 'styled-components';
import { greySuperLight, orange } from 'styled/colors';
import Footer from 'components/organisms/Footer';

const Section = styled.section`
  background-color: ${greySuperLight};
  border-top: 3px solid ${orange};
`;

const FooterTemplate = () => (
  <Section>
    <Footer />
  </Section>
);

export default FooterTemplate;
