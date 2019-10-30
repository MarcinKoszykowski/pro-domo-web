import React from 'react';
import { text } from 'data/header';
import routes from 'data/routes';
import HyperLink from '../molecules/HyperLink';

const Navigation = () => (
  <>
    <HyperLink link={routes.form}>{text.form}</HyperLink>
    <HyperLink link={routes.faq}>{text.faq}</HyperLink>
    <HyperLink link={routes.career}>{text.career}</HyperLink>
  </>
);

export default Navigation;
