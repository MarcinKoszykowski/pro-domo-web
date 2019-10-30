import React, { useEffect, useRef, useContext } from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import { colorWithOpacity, orange } from 'styled/colors';
import Loan from 'components/Loan/Loan';
import { addAnimationEventListener, removeAnimationEventListener } from 'helpers/functions';
import { addAnimation } from '../helpers/functions';

const Section = styled.section`
  text-align: center;
  background-color: ${colorWithOpacity(orange, 0.95)};
`;

const LoanTemplate = () => {
  const reference = useRef(null);

  const { handleSetLoanIsVisibility, handleWindowSizeAnimation } = useContext(AppContext);

  const handleLoanAnimation = () => addAnimation(reference, 1.5, handleSetLoanIsVisibility);
  const addAnimationEffect = () => addAnimationEventListener(handleLoanAnimation);
  const removeAnimationEffect = () => removeAnimationEventListener(handleLoanAnimation);
  const windowAnimationEffect = () => handleWindowSizeAnimation(handleLoanAnimation);

  useEffect(() => {
    addAnimationEffect();
    windowAnimationEffect();

    return () => {
      removeAnimationEffect();
    };
  });

  return (
    <Section ref={reference}>
      <Loan />
    </Section>
  );
};

export default LoanTemplate;
