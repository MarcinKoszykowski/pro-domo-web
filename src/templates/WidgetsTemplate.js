import React from 'react';
import styled from 'styled-components';
import { greyDark } from 'styled/colors';
import Widgets from 'components/Widgets/Widgets';

const Section = styled.section`
  background-color: ${greyDark};
`;

const WidgetsTemplate = () => (
  <Section>
    <Widgets />
  </Section>
);

export default WidgetsTemplate;
