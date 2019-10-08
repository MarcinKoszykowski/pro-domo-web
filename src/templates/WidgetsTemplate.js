import React from 'react';
import styled from 'styled-components';
import colors from 'styled/colors';
import Widgets from 'components/organisms/Widgets';

const Section = styled.section`
  background-color: ${colors.greyDark};
`;

const WidgetsTemplate = () => (
  <Section>
    <Widgets />
  </Section>
);

export default WidgetsTemplate;
