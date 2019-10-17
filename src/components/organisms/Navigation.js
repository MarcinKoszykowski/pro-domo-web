import React from 'react';
import styled from 'styled-components';
import NavigationHyperLink from 'components/molecules/Navigation/NavigationHyperLink';
import NavigationHyperLinkButton from 'components/molecules/Navigation/NavigationHyperLinkButton';
import { text, type } from 'data/header';
import routes from 'data/routes';

const Wrapper = styled.ul`
  margin: 0 10px;
`;

function Navigation() {
  const { form, faq, career } = routes;
  const { form: formType, faq: faqType, career: careerType } = type;
  const { form: formText, faq: faqText, career: careerText } = text;
  return (
    <Wrapper>
      <NavigationHyperLink link={form}>{formText}</NavigationHyperLink>
      <NavigationHyperLink link={faq}>{faqText}</NavigationHyperLink>
      <NavigationHyperLink link={career}>{careerText}</NavigationHyperLink>
      <NavigationHyperLinkButton type={formType} link={form} />
      <NavigationHyperLinkButton type={faqType} link={faq} />
      <NavigationHyperLinkButton type={careerType} link={career} />
    </Wrapper>
  );
}

export default Navigation;
