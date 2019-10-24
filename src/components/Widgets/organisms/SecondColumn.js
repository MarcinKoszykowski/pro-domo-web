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

const { pp, eq, pd, pdf } = link;
const { pp: routePP, eq: routeEQ, pd: routePD, pdf: routePDF } = routes;

const SecondColumn = () => (
  <Wrapper>
    <HyperLink link={routePP}>{pp}</HyperLink>
    <HyperLink link={routeEQ}>{eq}</HyperLink>
    <HyperLink link={routePD}>{pd}</HyperLink>
    <HyperLink link={routePDF}>{pdf}</HyperLink>
  </Wrapper>
);

export default SecondColumn;
