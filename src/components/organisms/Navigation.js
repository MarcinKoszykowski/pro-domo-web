import React from 'react';
import styled from 'styled-components';
import NavigationHyperLink from 'components/molecules/Navigation/NavigationHyperLink';
import NavigationHyperLinkButton from 'components/molecules/Navigation/NavigationHyperLinkButton';
import header from 'data/header';

const Wrapper = styled.ul`
  margin: 0 10px;
`;

const Navigation = () => (
  <Wrapper>
    <NavigationHyperLink link={header.link.form}>{header.text.form}</NavigationHyperLink>
    <NavigationHyperLink link={header.link.faq}>{header.text.faq}</NavigationHyperLink>
    <NavigationHyperLink link={header.link.career}>{header.text.career}</NavigationHyperLink>
    <NavigationHyperLinkButton type={header.type.form} link={header.link.form} />
    <NavigationHyperLinkButton type={header.type.faq} link={header.link.faq} />
    <NavigationHyperLinkButton type={header.type.career} link={header.link.career} />
  </Wrapper>
);

export default Navigation;
