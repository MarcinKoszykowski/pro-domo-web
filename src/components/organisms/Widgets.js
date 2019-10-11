import React from 'react';
import styled from 'styled-components';
import WidgetsHyperLink from 'components/molecules/WidgetsHyperLink';
import WidgetsText from 'components/atoms/WidgetsText';
import { link, address } from 'data/widgets';
import routes from 'data/routes';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 30px;
  transition: margin 0.2s, width 0.2s, padding 0.2s;

  @media screen and (min-width: 1600px) {
    margin: 0 auto;
    width: 1540px;
  }
  @media screen and (max-width: 950px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 5px 10px;
  }
`;

const Column = styled.div`
  margin: 20px auto;
  transition: margin 0.2s;

  @media screen and (max-width: 700px) {
    margin: 10px auto;
  }
`;

const Widgets = () => (
  <Wrapper>
    <Column>
      <WidgetsHyperLink link={routes.main}>{link.main}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.form}>{link.form}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.faq}>{link.faq}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.career}>{link.carrer}</WidgetsHyperLink>
    </Column>
    <Column>
      <WidgetsHyperLink link={routes.pp}>{link.pp}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.eq}>{link.eq}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.pd}>{link.pd}</WidgetsHyperLink>
      <WidgetsHyperLink link={routes.pdf}>{link.pdf}</WidgetsHyperLink>
    </Column>
    <Column>
      <WidgetsText>{address.title}</WidgetsText>
      <WidgetsText>{address.address_1}</WidgetsText>
      <WidgetsText>{address.address_2}</WidgetsText>
    </Column>
  </Wrapper>
);

export default Widgets;
