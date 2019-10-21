import React from 'react';
import faq from 'data/faq';
import FAQ from 'components/FAQ/FAQ';

const FaqTemplate = () =>
  faq.map(({ answer, question, key }) => <FAQ key={key} answer={answer} question={question} />);

export default FaqTemplate;
