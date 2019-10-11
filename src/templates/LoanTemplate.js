import React, { useState, useEffect, createRef, useCallback } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, orange } from 'styled/colors';
import Loan from 'components/molecules/Loan';

const Section = styled.section`
  text-align: center;
  background-color: ${colorWithOpacity(orange, 0.95)};
`;

const reference = createRef();

function LoanTemplate() {
  const [isVisibility, setIsVisibility] = useState(false);
  const [animation, setAnimation] = useState(true);

  const elementInViewport = (element, number) => {
    const top = element.offsetTop;
    return top * number < window.pageYOffset + window.innerHeight;
  };

  const addAnimation = () => {
    const section = reference.current;

    if (elementInViewport(section, 1.3)) {
      setIsVisibility(true);
    }
  };

  const handleAddAnimation = () => {
    if (animation) {
      window.addEventListener('scroll', addAnimation);
      window.addEventListener('resize', addAnimation);
      window.addEventListener('load', addAnimation);
    }
  };

  const handleRemoveAnimation = () => {
    setAnimation(false);
    window.removeEventListener('scroll', addAnimation);
    window.removeEventListener('resize', addAnimation);
    window.removeEventListener('load', addAnimation);
  };

  const handleWindowSizeAnimation = () => {
    if (window.innerHeight > window.outerHeight) {
      addAnimation();
    }
  };

  const addAnimationEffect = useCallback(handleAddAnimation, [animation]);
  const removeAnimationEffect = useCallback(handleRemoveAnimation, [animation]);
  const windowAnimationEffect = useCallback(handleWindowSizeAnimation);

  useEffect(() => {
    addAnimationEffect();
    windowAnimationEffect();

    return () => {
      removeAnimationEffect();
    };
  }, [addAnimationEffect, removeAnimationEffect, windowAnimationEffect]);

  return (
    <Section ref={reference}>
      <Loan isVisibility={isVisibility} />
    </Section>
  );
}

export default LoanTemplate;
