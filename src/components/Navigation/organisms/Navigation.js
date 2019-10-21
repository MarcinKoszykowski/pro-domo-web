import React from 'react';
import HyperLink from 'components/Navigation/molecules/HyperLink';
import { text } from 'data/header';
import routes from 'data/routes';

const { form, faq, career } = routes;
const { form: formText, faq: faqText, career: careerText } = text;

const Navigation = () => (
  <>
    <HyperLink link={form}>{formText}</HyperLink>
    <HyperLink link={faq}>{faqText}</HyperLink>
    <HyperLink link={career}>{careerText}</HyperLink>
  </>
);

export default Navigation;
