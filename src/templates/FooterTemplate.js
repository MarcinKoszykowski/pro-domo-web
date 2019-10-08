import React from 'react';
import styled from 'styled-components';
import colors from 'styled/colors';
import Footer from 'components/organisms/Footer';

const Section = styled.section`
  background-color: ${colors.greySuperLight};
  border-top: 3px solid ${colors.orange};
`;

const FooterTemplate = () => (
  <Section>
    <Footer />
  </Section>
);

export default FooterTemplate;
