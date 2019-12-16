import React from 'react';
import styled from 'styled-components';
import { grey_super_light, orange } from 'styled/colors';
import Footer from 'components/Footer/Footer';

const Section = styled.section`
  background-color: ${grey_super_light};
  border-top: 3px solid ${orange};
`;

const FooterTemplate = () => (
  <Section>
    <Footer />
  </Section>
);

export default FooterTemplate;
