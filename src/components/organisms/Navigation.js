import React from 'react';
import styled from 'styled-components';
import NavigationHyperLink from 'components/molecules/Navigation/NavigationHyperLink';
import NavigationHyperLinkButton from 'components/molecules/Navigation/NavigationHyperLinkButton';
import header from 'data/header';
import routes from 'data/routes';

const Wrapper = styled.ul`
  margin: 0 10px;
`;

const Navigation = () => (
  <Wrapper>
    <NavigationHyperLink link={routes.form}>{header.text.form}</NavigationHyperLink>
    <NavigationHyperLink link={routes.faq}>{header.text.faq}</NavigationHyperLink>
    <NavigationHyperLink link={routes.career}>{header.text.career}</NavigationHyperLink>
    <NavigationHyperLinkButton type={header.type.form} link={routes.form} />
    <NavigationHyperLinkButton type={header.type.faq} link={routes.faq} />
    <NavigationHyperLinkButton type={header.type.career} link={routes.career} />
  </Wrapper>
);

export default Navigation;
