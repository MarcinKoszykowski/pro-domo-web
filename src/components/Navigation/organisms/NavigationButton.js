import React from 'react';
import { type } from 'data/header';
import routes from 'data/routes';
import HyperLinkButton from '../molecules/HyperLinkButton';

const NavigationButton = () => (
  <>
    <HyperLinkButton type={type.form} link={routes.form} />
    <HyperLinkButton type={type.faq} link={routes.faq} />
    <HyperLinkButton type={type.career} link={routes.career} />
  </>
);

export default NavigationButton;
