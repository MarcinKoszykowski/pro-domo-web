import React from 'react';
import styled from 'styled-components';
import WidgetsHyperLink from 'components/molecules/WidgetsHyperLink';
import WidgetsText from 'components/atoms/WidgetsText';
import widgets from 'data/widgets';

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
      <WidgetsHyperLink link="/">{widgets.link.main}</WidgetsHyperLink>
      <WidgetsHyperLink link="/formularz-kontaktowy">{widgets.link.form}</WidgetsHyperLink>
      <WidgetsHyperLink link="/pytania-i-odpowiedzi">{widgets.link.faq}</WidgetsHyperLink>
      <WidgetsHyperLink link="/kariera">{widgets.link.carrer}</WidgetsHyperLink>
    </Column>
    <Column>
      <WidgetsHyperLink link="/polityka-prywatnosci">{widgets.link.pp}</WidgetsHyperLink>
      <WidgetsHyperLink link="/eques-creditum">{widgets.link.eq}</WidgetsHyperLink>
      <WidgetsHyperLink link="/pd">{widgets.link.pd}</WidgetsHyperLink>
      <WidgetsHyperLink link="/pdf">{widgets.link.pdf}</WidgetsHyperLink>
    </Column>
    <Column>
      <WidgetsText>{widgets.address.title}</WidgetsText>
      <WidgetsText>{widgets.address.address_1}</WidgetsText>
      <WidgetsText>{widgets.address.address_2}</WidgetsText>
    </Column>
  </Wrapper>
);

export default Widgets;
