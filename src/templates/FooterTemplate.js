import React from 'react';
import styled from 'styled-components';
import colors from 'styled/colors';
import Footer from 'components/organisms/Footer';

const Section = styled.section`
  color: ${colors.greyMedium};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  background-color: ${colors.greySuperLight};
  border-top: 3px solid ${colors.orange};
  transition: font-size 0.2s;

  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

const FooterTemplate = () => (
  <Section>
    <Footer />
  </Section>
);

export default FooterTemplate;
