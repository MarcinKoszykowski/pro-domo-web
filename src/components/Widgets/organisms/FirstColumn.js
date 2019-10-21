import React from 'react';
import styled from 'styled-components';
import { link } from 'data/widgets';
import routes from 'data/routes';
import HyperLink from 'components/Widgets/molecules/HyperLink';

const Wrapper = styled.div`
  margin: 20px auto;
  transition: margin 0.2s;

  @media screen and (max-width: 700px) {
    margin: 10px auto;
  }
`;

const { main, form, faq, career } = link;
const { main: routeMain, form: routeForm, faq: routeFAQ, career: routeCareer } = routes;

const FirstColumn = () => (
  <Wrapper>
    <HyperLink link={routeMain}>{main}</HyperLink>
    <HyperLink link={routeForm}>{form}</HyperLink>
    <HyperLink link={routeFAQ}>{faq}</HyperLink>
    <HyperLink link={routeCareer}>{career}</HyperLink>
  </Wrapper>
);

export default FirstColumn;
