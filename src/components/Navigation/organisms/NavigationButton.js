import React from 'react';
import { type } from 'data/header';
import { form, faq, career } from 'data/routes';
import HyperLinkButton from '../molecules/HyperLinkButton';

const NavigationButton = () => (
  <>
    <HyperLinkButton type={type.form} link={form} />
    <HyperLinkButton type={type.faq} link={faq} />
    <HyperLinkButton type={type.career} link={career} />
  </>
);

export default NavigationButton;
