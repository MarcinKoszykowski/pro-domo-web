import React from 'react';
import { text } from 'data/header';
import { form, faq, career } from 'data/routes';
import HyperLink from '../molecules/HyperLink';

const Navigation = () => (
  <>
    <HyperLink link={form}>{text.form}</HyperLink>
    <HyperLink link={faq}>{text.faq}</HyperLink>
    <HyperLink link={career}>{text.career}</HyperLink>
  </>
);

export default Navigation;
