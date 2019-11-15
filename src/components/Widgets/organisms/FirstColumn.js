import React from 'react';
import styled from 'styled-components';
import { link } from 'data/widgets';
import { main, form, faq, career } from 'data/routes';
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
    <HyperLink link={main}>{link.main}</HyperLink>
    <HyperLink link={form}>{link.form}</HyperLink>
    <HyperLink link={faq}>{link.faq}</HyperLink>
    <HyperLink link={career}>{link.career}</HyperLink>
  </Wrapper>
);

export default FirstColumn;
