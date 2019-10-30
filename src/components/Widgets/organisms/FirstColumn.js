import React from 'react';
import styled from 'styled-components';
import { link } from 'data/widgets';
import routes from 'data/routes';
import HyperLink from '../molecules/HyperLink';

const Wrapper = styled.div`
  margin: 20px auto;
  transition: margin 0.2s;

  @media screen and (max-width: 700px) {
    margin: 10px auto;
  }
`;

const FirstColumn = () => (
  <Wrapper>
    <HyperLink link={routes.main}>{link.main}</HyperLink>
    <HyperLink link={routes.form}>{link.form}</HyperLink>
    <HyperLink link={routes.faq}>{link.faq}</HyperLink>
    <HyperLink link={routes.career}>{link.career}</HyperLink>
  </Wrapper>
);

export default FirstColumn;
