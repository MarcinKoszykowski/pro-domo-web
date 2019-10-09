import React from 'react';
import faq from 'data/faq';
import Faq from 'components/organisms/Faq';

const FaqTemplate = () =>
  faq.map(({ answer, question, key }) => <Faq key={key} answer={answer} question={question} />);

export default FaqTemplate;
