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

function Widgets() {
  const { main, form, faq, career, pp, eq, pd, pdf } = link;
  const { title, address1, address2 } = address;
  const {
    main: routeMain,
    form: routeForm,
    faq: routeFAQ,
    career: routeCareer,
    pp: routePP,
    eq: routeEQ,
    pd: routePD,
    pdf: routePDF,
  } = routes;

  return (
    <Wrapper>
      <Column>
        <WidgetsHyperLink link={routeMain}>{main}</WidgetsHyperLink>
        <WidgetsHyperLink link={routeForm}>{form}</WidgetsHyperLink>
        <WidgetsHyperLink link={routeFAQ}>{faq}</WidgetsHyperLink>
        <WidgetsHyperLink link={routeCareer}>{career}</WidgetsHyperLink>
      </Column>
      <Column>
        <WidgetsHyperLink link={routePP}>{pp}</WidgetsHyperLink>
        <WidgetsHyperLink link={routeEQ}>{eq}</WidgetsHyperLink>
        <WidgetsHyperLink link={routePD}>{pd}</WidgetsHyperLink>
        <WidgetsHyperLink link={routePDF}>{pdf}</WidgetsHyperLink>
      </Column>
      <Column>
        <WidgetsText>{title}</WidgetsText>
        <WidgetsText>{address1}</WidgetsText>
        <WidgetsText>{address2}</WidgetsText>
      </Column>
    </Wrapper>
  );
}

export default Widgets;
