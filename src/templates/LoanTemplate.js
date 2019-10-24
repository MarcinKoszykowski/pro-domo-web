import React, { useEffect, createRef, useContext } from 'react';
import AppContext from 'context';
import styled from 'styled-components';
import { colorWithOpacity, orange } from 'styled/colors';
import Loan from 'components/Loan/Loan';

const Section = styled.section`
  text-align: center;
  background-color: ${colorWithOpacity(orange, 0.95)};
`;

const reference = createRef();

function LoanTemplate() {
  const {
    handleSetLoanIsVisibility,
    addAnimation,
    handleRemoveEventListener,
    handleAddEventListener,
    handleWindowSizeAnimation,
  } = useContext(AppContext);

  const handleLoanAnimation = () => addAnimation(reference, 1.5, handleSetLoanIsVisibility);
  const addAnimationEffect = () => handleAddEventListener(handleLoanAnimation);
  const removeAnimationEffect = () => handleRemoveEventListener(handleLoanAnimation);
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
}

export default LoanTemplate;
