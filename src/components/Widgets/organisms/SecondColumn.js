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

const SecondColumn = () => (
  <Wrapper>
    <HyperLink link={routes.pp}>{link.pp}</HyperLink>
    <HyperLink link={routes.eq}>{link.eq}</HyperLink>
    <HyperLink link={routes.pd}>{link.pd}</HyperLink>
    <HyperLink link={routes.pdf}>{link.pdf}</HyperLink>
  </Wrapper>
);

export default SecondColumn;
