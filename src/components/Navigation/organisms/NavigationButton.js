import React from 'react';
import HyperLinkButton from 'components/Navigation/molecules/HyperLinkButton';
import { type } from 'data/header';
import routes from 'data/routes';

const { form, faq, career } = routes;
const { form: formType, faq: faqType, career: careerType } = type;

const NavigationButton = () => (
  <>
    <HyperLinkButton type={formType} link={form} />
    <HyperLinkButton type={faqType} link={faq} />
    <HyperLinkButton type={careerType} link={career} />
  </>
);

export default NavigationButton;
