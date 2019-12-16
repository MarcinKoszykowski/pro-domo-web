import React from 'react';
import styled from 'styled-components';
import { grey_dark } from 'styled/colors';
import Widgets from 'components/Widgets/Widgets';

const Section = styled.section`
  background-color: ${grey_dark};
`;

const WidgetsTemplate = () => (
  <Section>
    <Widgets />
  </Section>
);

export default WidgetsTemplate;
