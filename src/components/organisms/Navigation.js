import React from 'react';
import styled from 'styled-components';
import NavigationHyperLink from 'components/molecules/Navigation/NavigationHyperLink';
import NavigationHyperLinkButton from 'components/molecules/Navigation/NavigationHyperLinkButton';
import { text, type } from 'data/header';
import routes from 'data/routes';

const Wrapper = styled.ul`
  margin: 0 10px;
`;

const Navigation = () => (
  <Wrapper>
    <NavigationHyperLink link={routes.form}>{text.form}</NavigationHyperLink>
    <NavigationHyperLink link={routes.faq}>{text.faq}</NavigationHyperLink>
    <NavigationHyperLink link={routes.career}>{text.career}</NavigationHyperLink>
    <NavigationHyperLinkButton type={type.form} link={routes.form} />
    <NavigationHyperLinkButton type={type.faq} link={routes.faq} />
    <NavigationHyperLinkButton type={type.career} link={routes.career} />
  </Wrapper>
);

export default Navigation;
